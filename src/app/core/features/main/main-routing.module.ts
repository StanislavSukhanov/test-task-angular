import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListComponent } from './components/user-list/list.component';
import { UserExistGuard } from '../../guards/user-exist.guard';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [UserExistGuard],
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
      {path: 'profile/:id', component: UserPreviewComponent},
      {path: 'map', component: MapComponent},
      {path: 'list', component: ListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
