import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private URL_BASE = 'http://localhost:8080/pets'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  savePet(pet: Pet): Observable<Pet> {
    console.log(this.URL_BASE + '/savepet')
    return this.http.post<Pet>(this.URL_BASE + '/savepet', pet, this.httpOptions);
  }

}
