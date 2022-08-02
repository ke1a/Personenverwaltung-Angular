import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  // alle Personen zurückgeben
  getAll(): Observable<any> {
    return this.http.get(url);
  }

  // eine Person nach id zurückgeben
  get(id: any): Observable<any> {
    return this.http.get(`${url}/${id}`);
  }

  // neue Person erstellen
  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  // Person ändern
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }

  // Person löschen
  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

}
