import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchByLocationModel } from '../../models/main.models';
import { UserDataService } from '../../services/user-data.service';
import { SearchUsersService } from '../../services/search-users.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapContainerComponent {

  constructor(private userService: UserDataService,
              private usersListService: SearchUsersService) {
  }

  searchUsers($event: SearchByLocationModel) {
    const params = `?radius=${$event.radius}&lat=${$event.center.lat}&lon=${$event.center.lon}`;
    this.usersListService.getUsers(params);
  }
}
