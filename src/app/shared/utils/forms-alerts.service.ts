import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsAlertsService {

  constructor() { }

  static showAlert(field: string) {
    document.getElementById(field + '-alert')?.classList.remove('hide');
    document.getElementById(field)?.classList.add('is-invalid');
  }

  static hideAlert(field: String) {
    document.getElementById(field + '-alert')?.classList.add('hide');
    document.getElementById(field.toString())?.classList.remove('is-invalid');
  }
}
