import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/pet';
import { PetService } from './service/pet.service';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.css']
})
export class FormPetComponent implements OnInit {

  pet = new Pet();

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  savePet() {
    console.log('saving...')
    this.petService.savePet(this.pet)
    .subscribe(data => {
      console.log('Guardada.')
    },error =>  { 
      console.log('No se logro agregar.')
    });
  }

}
