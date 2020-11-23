import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthFormsService } from './services/auth-forms.service';



@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, RegistrationComponent, AuthFormComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  providers: [AuthFormsService]
})
export class AuthModule { }
