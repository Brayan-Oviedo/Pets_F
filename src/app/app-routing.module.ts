import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/'},
  {path: 'auth', loadChildren: () => import ('./auth/components/auth.module').then(module => module.AuthModule) },
  {path: 'form', loadChildren: () => import ('./components/form/form.module').then(module => module.FormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
