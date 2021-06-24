import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterModule} from '../footer/footer.module';
import {PetClinicComponent} from '../pet-clinic/pet-clinic/pet-clinic.component';



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
