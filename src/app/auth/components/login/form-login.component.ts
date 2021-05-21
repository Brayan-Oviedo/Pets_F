import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/core/messages/Messages';
import { LoginUser } from 'src/app/auth/model/login-user';
import { AuthService } from 'src/app/auth/service/auth.service';
import { TokenService } from 'src/app/auth/service/token.service';
import { Router } from '@angular/router';
import { RegularExpressions } from 'src/app/core/validation/regular-expressions';
import { FormsAlertsService } from 'src/app/shared/utils/forms-alerts.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  loginUser = new LoginUser();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  login() {
    if(this.isValidUser()) {
      this.authService.login(this.loginUser).subscribe(
        data => {
          Messages.throwMessageSuccess('', 'Logueado.')
          this.tokenService.setToken(data.token); 
          this.router.navigate(['/'])
        },error => {
          console.log(error.error);
          Messages.throwMessageError(error.error.message, 'No se logro loguear.');
        }
      );
    }
  }

  isValidUser(): boolean {
    if(!RegularExpressions.LETTERS_NUMBERS_SCRIPT_MIN1.test(this.loginUser.userName)) {
      FormsAlertsService.showAlert('userName');
      return false;
    }else FormsAlertsService.hideAlert('userName');

    if(!Boolean(this.loginUser.password)) {
      FormsAlertsService.showAlert('password');
      return false;
    }else FormsAlertsService.hideAlert('password');

    return true;
  }

}
