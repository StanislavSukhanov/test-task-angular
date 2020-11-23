import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';
import { UserExistGuard } from '../../guards/user-exist.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', canActivate: [UserExistGuard], component: ProfileComponent},
      {path: 'map', component: MapComponent},
      {path: 'list', component: ListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
