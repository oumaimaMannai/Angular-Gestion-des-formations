import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganismeService {

  private baseUrl:string;
    

  constructor(private http: HttpClient) {
    this.baseUrl= 'http://localhost:8080/organisme';
  }

  getOrganisme(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`/organisme`+`/${id}`); 
   }

  createOrganisme(organisme: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/addorganisme`, organisme); } 

  updateOragnisme(id: number, value: any): Observable<Object> {
      return this.http.post(`${this.baseUrl}`+`/updateorganisme`+`/${id}`, value); } 

      deleteOrganisme(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}`+`/deleteorganisme/${id}`, {responseType: 'text' }); 
      }  
        
  getOrganismesList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+`/organisme`); }

}
