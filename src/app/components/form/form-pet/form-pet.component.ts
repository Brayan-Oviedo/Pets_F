import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/pet';
import { PetService } from './service/pet.service';
import { RegularExpressions } from '../../../core/validation/RegularExpressions';

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
    if(this.validPet()) {
      this.petService.savePet(this.pet)
      .subscribe(data => {
        console.log('Guardada.')
      },error =>  { 
        console.log('No se logro agregar.')
      });
    }
  }

  private validPet(): Boolean {
    if(!RegularExpressions.LETTERS_NUMBERS_SCRIPT_MIN1.test(this.pet.id)) {
      this.showAlert('id');
      return false;
    }else this.hideAlert('id');

    if(!Boolean(this.pet.name)){
      this.showAlert('name');
      return false;
    }else this.hideAlert('name');

    if(RegularExpressions.LETTERS_NUMBERS_SCRIPT_MIN1.test(this.pet.colour)){
      this.showAlert('colour');
      return false;
    }else this.hideAlert('colour');

    if(this.pet.age <= 0){
      this.showAlert('age');
      return false;
    }else this.hideAlert('age');

    return true;
  }

  private showAlert(field: string) {
    document.getElementById(field + '-alert')?.classList.remove('hide');
    document.getElementById(field)?.classList.add('is-invalid');
  }

  private hideAlert(field: String) {
    document.getElementById(field + '-alert')?.classList.add('hide');
    document.getElementById(field.toString())?.classList.remove('is-invalid');
  }

}
