import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Messages } from 'src/app/core/messages/Messages';
import { RegularExpressions } from 'src/app/core/validation/regular-expressions';
import { FormsAlertsService } from 'src/app/shared/utils/forms-alerts.service';
import { NewUser } from '../../model/new-user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  newUser = new NewUser();
  checkPassword = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    if(this.isValidUser()) {
      this.authService.register(this.newUser).subscribe(
        data => {
          Messages.throwMessageSuccess('', '');
          this.router.navigate(['/auth/login']);
        }, 
        error => {
          Messages.throwMessageError('', error.error.message);
        }
      );
    }
  }

  isValidUser(): boolean {
    if(!RegularExpressions.LETTERS_MIN1.test(this.newUser.name)) {
      FormsAlertsService.showAlert('name');
      return false;
    }else FormsAlertsService.hideAlert('name');

    if(!RegularExpressions.LETTERS_MIN1.test(this.newUser.lastName)) {
      FormsAlertsService.showAlert('lastName');
      return false;
    }else FormsAlertsService.hideAlert('lastName');

    if(!RegularExpressions.LETTERS_NUMBERS_SCRIPT_MIN1.test(this.newUser.userName)) {
      FormsAlertsService.showAlert('userName');
      return false;
    }else FormsAlertsService.hideAlert('userName');

    if(this.newUser.age < 0) {
      FormsAlertsService.showAlert('age');
      return false;
    }else FormsAlertsService.hideAlert('age');

    if(!Boolean(this.newUser.password)) {
      FormsAlertsService.showAlert('password');
      return false;
    }else FormsAlertsService.hideAlert('password');

    if(this.newUser.password != this.checkPassword) {
      FormsAlertsService.showAlert('checkPassword');
      return false;
    }else FormsAlertsService.hideAlert('checkPassword');

    return true;
  }

}
