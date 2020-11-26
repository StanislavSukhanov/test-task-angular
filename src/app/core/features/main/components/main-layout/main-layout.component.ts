import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { SearchUsersService } from '../../services/search-users.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  searchSubject$ = new Subject<string>();
  destroy$ = new Subject<void>();

  constructor(private searchUsersService: SearchUsersService) {
  }

  ngOnInit() {
    this.searchSubject$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(name => {
        this.searchUsersService.getUsers(`?searchString=${name}`);
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  searchUsers(str: string) {
    this.searchSubject$.next(str);
  }
}
