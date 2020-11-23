import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthorizedGuard } from './guards/is-authorized.guard';
import { GuestGuard } from './guards/guest.guard';


const routes: Routes = [
  {
    path: 'auth',
    canActivate: [GuestGuard],
    loadChildren: () => import('./features/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '',
    canActivate: [IsAuthorizedGuard],
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
