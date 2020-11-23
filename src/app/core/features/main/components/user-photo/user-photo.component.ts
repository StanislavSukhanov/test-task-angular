import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPhotoComponent implements OnInit {

  @Input() photoUrl: 'string';
  @Input() enableSend: boolean;
  @Output() updatePhoto: EventEmitter<FormData> = new EventEmitter<FormData>();
  @Output() deletePhoto: EventEmitter<void> = new EventEmitter<void>();

  fallbackUrl = 'https://hajiri.co/uploads/no_image.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  update(): void{
    this.updatePhoto.emit();
  }

  delete(): void{
    this.deletePhoto.emit();
  }

  focus(upload: HTMLInputElement) {
    upload.select();
  }
}
