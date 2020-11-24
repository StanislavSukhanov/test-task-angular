import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../features/main/services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistGuard implements CanActivate {
  constructor(private userService: UserDataService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.userService.userValue) {
      this.userService.loadUserData();
    }
    return true;
  }
}
