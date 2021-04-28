import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPetComponent } from './components/form-pet/form-pet.component';

const routes: Routes = [
  { path: '*', pathMatch: 'full', redirectTo: '/form-pet1' },
  { path: 'form-pet1', component: FormPetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
