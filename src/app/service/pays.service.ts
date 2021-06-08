import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  private baseUrl:string;
    

  constructor(private http: HttpClient) {
    this.baseUrl= 'http://localhost:8080/pays';
  }

  getPays(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`/pays`+`/${id}`); 
   }

  createPays(pays: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/addpays`, pays); } 

  updatePays(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}`+`/updatepays`+`/${id}`, value); } 

      deletePays(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}`+`/deletepays/${id}`, {responseType: 'text' }); 
      }  
        
  getPaysList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+`/pays`); }
}
