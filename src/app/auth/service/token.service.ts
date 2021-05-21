import { Injectable } from '@angular/core';
import { Role } from '../constants/role';

const TOKEN_KEY = "AuthToken";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private rols: Array<Role> = [];

  constructor() { }

  setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  getUserName() {
    if(!this.isLogged()) return null;

    const values = this.getValuesPayloadFromToken();
    const userName = values.sub;
    return userName;
  }

  getRol() {
    if(!this.isLogged) return null;

    const values = this.getValuesPayloadFromToken();
    const rols = values.rols;
    if(rols.includes(Role.ADMIN)) return Role.ADMIN;
    if(rols.includes(Role.MANAGER)) return Role.MANAGER;
    if(rols.includes(Role.OPERATOR)) return Role.OPERATOR;

    return Role.CUSTOMER;
  }

  private getValuesPayloadFromToken(): any{
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    return values;
  }

  logOut(): void {
    window.sessionStorage.clear();
  }

  isLogged(): boolean {
    if(this.getToken()){
      return true;
    }
    return false;
  }
 
}
