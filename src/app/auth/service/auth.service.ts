import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/auth/model/jwt-dto';
import { LoginUser } from 'src/app/auth/model/login-user';
import { Result } from 'src/app/core/model/result';
import { environment } from 'src/environments/environment';
import { NewUser } from '../model/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_BASE = environment.URL_BASE + 'auth'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(loginUser: LoginUser): Observable<Result> {
    return this.http.post<Result>(this.URL_BASE + '/login', loginUser, this.httpOptions);
  }

  refrestToken(jwtDto: JwtDto): Observable<Result> {
    return this.http.post<JwtDto>(this.URL_BASE + '/refreshtoken', jwtDto, this.httpOptions);
  }

  register(newUser: NewUser): Observable<Result> {
    return this.http.post<any>(this.URL_BASE + "/register", newUser, this.httpOptions);
  }
}
