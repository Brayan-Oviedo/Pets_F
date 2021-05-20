import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/auth/form-login'},
  {path: 'auth', loadChildren: () => import ('./components/auth/auth.module').then(module => module.AuthModule) },
  {path: 'form', loadChildren: () => import ('./components/form/form.module').then(module => module.FormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
