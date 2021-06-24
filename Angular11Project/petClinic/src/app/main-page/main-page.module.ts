import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent],
  exports: [
    MainPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainPageModule { }
