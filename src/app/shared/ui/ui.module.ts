import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

const imports = [
  MatButtonModule,
  MatInputModule,
  MatTabsModule,
  MatIconModule,
  MatRadioModule,
  MatCardModule
];


@NgModule({
  imports,
  exports: imports,
})
export class UiModule { }
