import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';
import { MainFormsService } from './services/main-forms.service';
import { UserPhotoComponent } from './components/user-photo/user-photo.component';
import { MapContainerComponent } from './components/map-container/map-container.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ProfileComponent,
    MapComponent,
    ListComponent,
    UserPhotoComponent,
    MapContainerComponent,
    UserCardComponent,
    UserPreviewComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  providers: [MainFormsService]
})
export class MainModule {
}
