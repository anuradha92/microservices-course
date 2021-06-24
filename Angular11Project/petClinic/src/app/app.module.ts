import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MainPageModule} from './main-page/main-page.module';
import {PetOwnerModule} from './pet-owner/pet-owner.module';
import {PetClinicModule} from './pet-clinic/pet-clinic.module';
import {FooterModule} from './footer/footer.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {DataService} from './data.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PetOwnerModule,
    PetClinicModule,
    FooterModule,
    MainPageModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
