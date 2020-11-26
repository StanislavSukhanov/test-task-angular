import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../../../../shared/models/shared.models';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  private readonly usersList: BehaviorSubject<UserModel[] | null> = new BehaviorSubject<UserModel[]>(null);
  userList$: Observable<UserModel[]> = this.usersList.asObservable();

  constructor(private apiService: ApiService) {
  }

  get usersValue(): UserModel[] | null {
    return this.usersList.value;
  }

  getUsers(params: string): void {
    this.apiService.searchUsers(params).pipe(
      tap(users => {
        this.usersList.next(users);
      })
    ).subscribe();
  }

  getAllUsers() {
    this.apiService.getAllUsers().pipe(
      tap(users => {
        this.usersList.next(users);
      })
    ).subscribe();
  }

}
