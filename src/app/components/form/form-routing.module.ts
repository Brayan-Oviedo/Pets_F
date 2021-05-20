import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService as AuthGuard} from 'src/app/auth/guard/guard.service';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { FormPetComponent } from './form-pet/form-pet.component';
import { FormComponent } from './form.component';

const routes: Routes = [{ 
  path: '',
  component: FormComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: '/auth/form-login'},
    {path: 'form-pet', component: FormPetComponent, canActivate: [AuthGuard], data: { expectedRol: ['ADMIN'] } },
    {path: 'carosuel', component: CarouselComponent, canActivate: [AuthGuard], data: { expectedRol: ['ADMIN'] } }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
