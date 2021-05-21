import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  private realRol: any = '';

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    this.realRol = this.tokenService.getRol();
    if(!this.tokenService.getToken() || !expectedRol.includes(this.realRol)) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
