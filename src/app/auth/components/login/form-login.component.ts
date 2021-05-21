import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/core/messages/Messages';
import { LoginUser } from 'src/app/auth/model/login-user';
import { AuthService } from 'src/app/auth/service/auth.service';
import { TokenService } from 'src/app/auth/service/token.service';
import { Role } from '../../constants/role';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  loginUser = new LoginUser();

  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }


  login() {
    this.authService.login(this.loginUser).subscribe(
      data => {
        Messages.throwMessageSuccess('', 'Logueado.')
        this.tokenService.setToken(data.token); 
      },error => {
        console.log(error.error);
        console.log(Role.CUSTOMER);
        Messages.throwMessageError(error.error.message, 'No se logro loguear.');
      }
    );
  }

}
