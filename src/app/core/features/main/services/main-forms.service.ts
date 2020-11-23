import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MainFormsService {

  constructor(private fb: FormBuilder) { }

  getProfileForm(): FormGroup {
    return this.fb.group({
      firstName: [null],
      lastName:	[null],
      gender:	[null],
      email: [null, [Validators.required]]
    });
}
}
