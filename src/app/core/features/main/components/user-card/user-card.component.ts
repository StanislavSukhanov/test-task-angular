import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../../../shared/models/shared.models';
import { fallbackUrl } from '../../constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserModel;
  imageFallbackUrl: string = fallbackUrl;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(id: string | number) {
    this.router.navigate(['profile', id]);
  }
}
