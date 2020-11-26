import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../features/main/services/user-data.service';
import { SearchUsersService } from '../features/main/services/search-users.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserDataService, private userSearchService: SearchUsersService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.next();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.next();

  }

  private next(): boolean {
    if (!this.userService.userValue) {
      // load data if no userData
      this.userService.loadUserData();
    }
    if (!this.userSearchService.usersValue) {
      this.userSearchService.getAllUsers();
    }
    return true;
  }
}
