import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { FormRoutingModule } from '../form/form-routing.module'
import { FormPetComponent } from "./form-pet/form-pet.component";
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    FormComponent,
    FormPetComponent,
    CarouselComponent
  ],
  imports: [
    FormRoutingModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
