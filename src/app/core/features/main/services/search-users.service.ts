import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../../../../shared/models/shared.models';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  private readonly usersList: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([]);
  userList$: Observable<UserModel[]> = this.usersList.asObservable();
  constructor(private apiService: ApiService) { }

  getUsers(params: string): void {
    this.apiService.searchUsers(params).pipe(
      tap(users => {
        console.log(users);
        this.usersList.next(users);
      })
    ).subscribe();
  }

}
