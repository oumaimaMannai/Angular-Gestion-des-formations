import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

 


  private baseUrl:string;
    

  constructor(private http: HttpClient) {
    this.baseUrl= 'http://localhost:8080/session';
  }

  getSession(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`/session`+`/${id}`); 
   }

  createSession(session: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/addsession`, session); } 

  updateSession(id: number, value: any): Observable<Object> {
      return this.http.post(`${this.baseUrl}`+`/updatesession`+`/${id}`, value); } 

  deleteSession(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}`+`/deletesession/${id}`, {responseType: 'text' }); 
  }  
        
  getSessionsList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+`/sessions`); }
        
}
