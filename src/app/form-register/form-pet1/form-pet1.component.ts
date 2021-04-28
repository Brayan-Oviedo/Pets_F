import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/pet';
import { PetService } from './service/pet.service';

@Component({
  selector: 'app-form-pet1',
  templateUrl: './form-pet1.component.html',
  styleUrls: ['./form-pet1.component.css']
})
export class FormPet1Component implements OnInit {

  pet = new Pet();

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  savePet() {
    console.log('saving...')
    this.petService.savePet(this.pet)
    .subscribe(data => {
      
    },error =>  { 
      console.log('No se logro agregar.')
    });
  }

}
