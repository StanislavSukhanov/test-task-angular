import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListComponent } from './components/list/list.component';
import { UserExistGuard } from '../../guards/user-exist.guard';
import { MapContainerComponent } from './components/map-container/map-container.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [UserExistGuard],
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', canActivate: [UserExistGuard], component: ProfileComponent},
      {path: 'profile/:id', component: UserPreviewComponent},
      {path: 'map', component: MapContainerComponent},
      // Todo add guard to load users;
      {path: 'list', component: ListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
