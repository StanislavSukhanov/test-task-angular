import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthFormsService {

  constructor(private fb: FormBuilder) { }

  getLoginRegisterForm(): FormGroup {
    return this.fb.group({
        email: [null, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
        password: [null, [Validators.required, Validators.minLength(6)]]
      }
    );
  }
}
