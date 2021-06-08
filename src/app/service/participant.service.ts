import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

 
  private baseUrl:string;
    

  constructor(private http: HttpClient) {
    this.baseUrl= 'http://localhost:8080/participant';
  }

  getParticipant(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`/participant`+`/${id}`); 
   }

  createParticipant(participant: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/addparticipant`, participant); } 

  updateParticipant(id: number, value: any): Observable<Object> {
      return this.http.post(`${this.baseUrl}`+`/updateparticipant`+`/${id}`, value); } 

      deleteParticipant(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}`+`/supprimerparticipant/${id}`, {responseType: 'text' }); 
      }  
        
  getParticipantsList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+`/participants`); }}
