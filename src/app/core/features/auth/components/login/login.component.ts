import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginRegisterService } from '../../services/login-register.service';
import { LoginRegisterModel } from '../../models/auth.models';
import { AppStorageService } from '../../../../../services/app-storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor(
    private loginRegisterService: LoginRegisterService,
    private storageService: AppStorageService,
    private router: Router
  ) { }

  logIn($event: LoginRegisterModel) {
    this.loginRegisterService.login($event).subscribe(token => {
      this.storageService.set('token', token);
      this.router.navigate(['/']);
    },
      error => console.log(error));
  }
}
