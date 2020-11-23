import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStorageService } from '../../services/app-storage-service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthorizedGuard implements CanActivate {

  constructor(private storageService: AppStorageService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.storageService.get('token')) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
