import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../../shared/models/shared.models';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPreviewComponent {

  user$: Observable<UserModel> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.apiService.getUserById(id)),
  );

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }
}
