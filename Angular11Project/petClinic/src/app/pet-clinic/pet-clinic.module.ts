import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetClinicComponent } from './pet-clinic/pet-clinic.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterModule} from '../footer/footer.module';



@NgModule({
  declarations: [PetClinicComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule
  ],
  exports: [PetClinicComponent]
})
export class PetClinicModule { }
