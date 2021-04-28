import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPet1Component } from './form-register/form-pet1/form-pet1.component';

const routes: Routes = [
  { path: '*', pathMatch: 'full', redirectTo: '/form-pet1' },
  { path: 'form-pet1', component: FormPet1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
