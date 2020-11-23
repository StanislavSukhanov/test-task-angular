import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { LoginRegisterModel } from '../../models/auth.models';
import { AuthFormsService } from '../../services/auth-forms.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent implements OnInit {

  @Input() title: string;
  @Output() submitData: EventEmitter<LoginRegisterModel> = new EventEmitter<LoginRegisterModel>();

  loginForm: FormGroup;

  constructor(
    private authFormsService: AuthFormsService
  ) {}

  ngOnInit() {
    this.loginForm = this.authFormsService.getLoginRegisterForm();
  }

  get emailErrors(): ValidationErrors {
    return this.loginForm.controls.email.errors;
  }

  get passwordErrors(): ValidationErrors {
    return this.loginForm.controls.password.errors;
  }

  submitForm(): void {
    this.submitData.emit(this.loginForm.value);
  }

}
