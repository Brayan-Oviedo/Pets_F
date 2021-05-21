import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/service/token.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
  }

  ngDoCheck(): void {
    this.isLogged = this.tokenService.isLogged();
  }

  logOut() {
    this.tokenService.logOut();
  }

}
