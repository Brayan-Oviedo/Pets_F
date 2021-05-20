import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormLoginComponent } from './login/form-login.component';
import { AuthRoutingModule } from './auth-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    FormLoginComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
