import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { fallbackUrl } from '../../constants/constants';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPhotoComponent {

  @Input() photoUrl: 'string';
  @Input() enableSend: boolean;
  @Output() updatePhoto: EventEmitter<FormData> = new EventEmitter<FormData>();
  @Output() deletePhoto: EventEmitter<void> = new EventEmitter<void>();

  fallbackPhotoUrl = fallbackUrl;

  update(): void {
    this.updatePhoto.emit();
  }

  delete(): void {
    this.deletePhoto.emit();
  }

  focus(upload: HTMLInputElement) {
    upload.click();
  }

  handleUpload(files: any): void {
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('image', files[0] as File);
      this.updatePhoto.emit(formData);
    }
    return;
  }
}
