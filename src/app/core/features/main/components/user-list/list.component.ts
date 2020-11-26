import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../../shared/models/shared.models';
import { SearchUsersService } from '../../services/search-users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  usersList$: Observable<UserModel[]> = this.users.userList$;

  constructor(private users: SearchUsersService) { }

  ngOnInit(): void {
  }

}
