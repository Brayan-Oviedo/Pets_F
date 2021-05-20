import { Injectable } from '@angular/core';

const TOKEN_KEY = "AuthToken";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private rols: Array<string> = [];

  constructor() { }

  setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return String(sessionStorage.getItem(TOKEN_KEY));
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
    if(rols.indexOf("ADMIN") < 0) return "CUSTOMER";

    return "ADMIN";
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
