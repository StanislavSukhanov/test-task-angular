import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../../../../shared/models/shared.models';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  currentUser$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  constructor(private apiService: ApiService) { }

  get userData(): Observable<UserModel> {
    return this.currentUser$.asObservable();
  }

  get userValue() {
    return this.currentUser$.value;
  }

  setUser(val: UserModel){
    this.currentUser$.next(val);
  }

  loadUserData(): void {
    // setting a value of a current user
    this.apiService.getUserDetails().pipe(
      tap(user => this.setUser(user))
    ).subscribe();
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
}
