import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetOwnerComponent } from './pet-owner/pet-owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FooterModule} from '../footer/footer.module';


@NgModule({
  declarations: [PetOwnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule
  ],
  exports: [PetOwnerComponent]
})
export class PetOwnerModule { }

