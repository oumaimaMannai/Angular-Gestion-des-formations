import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListFormationService {

  private baseUrl:string;
    

  constructor(private http: HttpClient) {
    this.baseUrl= 'http://localhost:8080/formation';
  }

  getFormation(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`/formation`+`/${id}`); 
   }

  createFormation(formation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/addformation`, formation); } 

  updateFormation(id: number, value: any): Observable<Object> {
      return this.http.post(`${this.baseUrl}`+`/updateformation`+`/${id}`, value); } 

  deleteFormation(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}`+`/supprimerformation/${id}`, {responseType: 'text' }); 
  }  
        
  getFormationsList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+`/formations`); }
        
}

