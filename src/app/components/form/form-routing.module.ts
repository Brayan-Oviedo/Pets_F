import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { FormPetComponent } from './form-pet/form-pet.component';
import { FormComponent } from './form.component';

const routes: Routes = [{ 
  path: '',
  component: FormComponent,
  children: [
    {path: '', component: FormComponent},
    {path: 'form-pet', component: FormPetComponent},
    {path: 'carosuel', component: CarouselComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
