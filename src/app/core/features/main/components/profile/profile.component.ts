import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../../../../../shared/models/shared.models';
import { UserDataService } from '../../services/user-data.service';
import { takeUntil } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { MainFormsService } from '../../services/main-forms.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, OnDestroy {
  user$: Observable<UserModel> = this.userDataService.userData;
  destroy$: Subject<void> = new Subject<void>();

  updateForm: FormGroup = this.formService.getProfileForm();
  userPhoto: string;

  constructor(private userDataService: UserDataService, private formService: MainFormsService) { }

  ngOnInit(): void {
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user: UserModel) => {
      if (user) {
        this.updateForm.patchValue(user);
        this.userPhoto = user.image || '';
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  submitForm(): void {
    this.userDataService.updateUserData(this.updateForm.value);
  }

  deletePhoto(): void {

  }

  updatePhoto($event: FormData) {

  }
}
