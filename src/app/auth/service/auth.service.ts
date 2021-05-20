import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/auth/model/jwt-dto';
import { LoginUser } from 'src/app/auth/model/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_BASE = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(loginUser: LoginUser): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.URL_BASE + '/login', loginUser, this.httpOptions);
  }

  refrestToken(jwtDto: JwtDto): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.URL_BASE + '/refreshtoken', jwtDto, this.httpOptions);
  }
}
