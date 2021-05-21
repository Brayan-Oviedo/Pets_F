import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/pet';
import { PetService } from '../../../service/pet/pet.service';
import { RegularExpressions } from '../../../core/validation/regular-expressions';
import { Messages } from '../../../core/messages/Messages'
import { ProgressBarI } from 'src/app/core/contracts/progress-bar';
import { FormsAlertsService } from 'src/app/shared/utils/forms-alerts.service';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.css']
})
export class FormPetComponent implements OnInit, ProgressBarI {

  pet = new Pet();

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  savePet() {
    console.log('saving...')
    if(this.isValidPet()) {
      this.showProgressBar();
      this.petService.savePet(this.pet)
      .subscribe(data => {
        console.log('Guardada.')
        this.hideProgressBar();
        Messages.throwMessageSuccess('', 'Mascota agregada.');
        
      },error =>  { 
        let mssg = error.message;
        console.log('No se logro agregar.' + mssg)
        this.hideProgressBar();
        Messages.throwMessageError('', 'No se logro agregar la mascota.')
      });
    }
  }

  private isValidPet(): Boolean {
    if(!RegularExpressions.LETTERS_NUMBERS_SCRIPT_MIN1.test(this.pet.id)) {
      FormsAlertsService.showAlert('id');
      return false;
    }else FormsAlertsService.hideAlert('id');

    if(!Boolean(this.pet.name)){
      FormsAlertsService.showAlert('name');
      return false;
    }else FormsAlertsService.hideAlert('name');

    if(this.pet.colour.length <= 2){
      FormsAlertsService.showAlert('colour');
      return false;
    }else FormsAlertsService.hideAlert('colour');

    if(this.pet.age <= 0){
      FormsAlertsService.showAlert('age');
      return false;
    }else FormsAlertsService.hideAlert('age');

    return true;
  }

  showProgressBar(): void {
    document.getElementById('form')?.classList.add('progress-bar');
    document.getElementById('form')?.classList.add('opacity');
    document.getElementById('progress-bar')?.classList.remove('hide');
  }

  hideProgressBar(): void {
    document.getElementById('form')?.classList.remove('progress-bar');
    document.getElementById('form')?.classList.remove('opacity');
    document.getElementById('progress-bar')?.classList.add('hide');
  }

}
