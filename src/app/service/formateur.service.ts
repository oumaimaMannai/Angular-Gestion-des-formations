import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

 


  private baseUrl:string;
    

  constructor(private http: HttpClient) {
    this.baseUrl= 'http://localhost:8080/formateur';
  }

  getFormateur(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`/formateur`+`/${id}`); 
   }

  createFormateur(formateur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/addformateur`, formateur); } 

  updateFormateur(id: number, value: any): Observable<Object> {
      return this.http.post(`${this.baseUrl}`+`/updateformateur/`+`${id}`, value); } 

      deleteFormateur(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}`+`/supprimerformateur/${id}`, {responseType: 'text' }); 
      }  
        
  getFormateursList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+`/formateurs`); }

}
