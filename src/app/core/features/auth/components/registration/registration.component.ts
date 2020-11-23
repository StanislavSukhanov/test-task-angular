import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginRegisterService } from '../../services/login-register.service';
import { LoginRegisterModel } from '../../models/auth.models';
import { AppStorageService } from '../../../../../services/app-storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {

  constructor(
    private loginRegisterService: LoginRegisterService,
    private storageService: AppStorageService,
    private router: Router,
  ) { }

  register($event: LoginRegisterModel): void {
    this.loginRegisterService.register($event)
      .subscribe((token: string) => {
        this.storageService.set('token', token);
        this.router.navigate(['/']);
      });
  }
}
