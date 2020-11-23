import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class SharedModule { }
