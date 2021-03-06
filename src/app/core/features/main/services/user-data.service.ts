import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../../../../shared/models/shared.models';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { centerOfKyiv, setFallbackLocationById } from '../constants/constants';
import { AppStorageService } from '../../../../services/app-storage-service';
import { Router } from '@angular/router';

// todo discover how to implement a common observer win a class

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  currentUser$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

  constructor(private apiService: ApiService, private storageService: AppStorageService, private router: Router) {
  }

  get userData(): Observable<UserModel> {
    return this.currentUser$.asObservable();
  }

  get userValue() {
    return this.currentUser$.value;
  }

  setUser(val: UserModel) {
    this.currentUser$.next(val);
  }

  loadUserData(): void {
    // setting a value of a current user
    this.apiService.getUserDetails().pipe(
      tap(user => this.setUser(user))
    ).subscribe((user: UserModel) => {
      // case where user location is not set
      if (!user.lon || !user.lat) {
        this.setLocation(user.id);
      }
    });
  }

  updateUserData(data: UserModel): void {
    // updating user value and saving it
    this.apiService.updateUserDetails(data).pipe(
      tap(user => this.setUser(user))
    ).subscribe();
  }

  updateUserPhoto(data: FormData): void {
    this.apiService.updateUserPhoto(data).pipe(
      tap(user => this.setUser(user))
    ).subscribe();
  }

  deletePhoto(): void {
    this.apiService.deleteUserPhoto().pipe(
      tap(() => {
        // removing a user's image
        const newUserValue = this.userValue;
        delete newUserValue.image;
        this.setUser(newUserValue);
      })
    ).subscribe();
  }

  setLocation(id): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          const userPosition = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          this.apiService.setUserLocation(userPosition)
            .pipe(
              tap(user => this.setUser(user))
            ).subscribe();
        },
        () => {
          this.apiService.setUserLocation(setFallbackLocationById(id))
            .pipe(
              tap(user => this.setUser(user))
            ).subscribe();
        },
        {maximumAge: 60000, timeout: 5000, enableHighAccuracy: true}
      );
    } else {
      this.apiService.setUserLocation(setFallbackLocationById(id))
        .pipe(
          tap(user => this.setUser(user))
        ).subscribe();
    }
  }

  logOut() {
    return this.apiService.logOut().subscribe(res => {
      this.storageService.remove('token');
      this.setUser(null);
      this.router.navigate(['auth']);
    });
  }
}
