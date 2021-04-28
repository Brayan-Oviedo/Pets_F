import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from './core/base-module';
import { FormPetComponent } from './components/form-pet/form-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
