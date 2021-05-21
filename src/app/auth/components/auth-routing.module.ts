import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/auth/guard/login.guard';
import { AuthComponent } from './auth.component';
import { FormLoginComponent } from './login/form-login.component';
import { FormRegisterComponent } from './register/form-register.component';

const routes: Routes = [{ 
  path: '',
  component: AuthComponent,
  children: [
    {path: '', component: AuthComponent },
    {path: 'login', component: FormLoginComponent , canActivate: [LoginGuard]},
    {path: 'register', component: FormRegisterComponent , canActivate: [LoginGuard]}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
