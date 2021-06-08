import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  private baseUrl:string;
    

  constructor(private http: HttpClient) {
    this.baseUrl= 'http://localhost:8080/domaine';
  }

  getDomaine(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`/domaine`+`/${id}`); 
   }

  createDomaine(formateur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/adddomaine`, formateur); } 

  updateDomaine(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}`+`/updatedomaine`+`/${id}`, value); } 

      deleteDomaine(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}`+`/supprimerdomaine/${id}`, {responseType: 'text' }); 
      }  
        
  getDomainesList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+`/domaines`); }

}


