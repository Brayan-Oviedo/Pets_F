import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from './core/base-module';
import { FormPet1Component } from './form-register/form-pet1/form-pet1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPet1Component
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
