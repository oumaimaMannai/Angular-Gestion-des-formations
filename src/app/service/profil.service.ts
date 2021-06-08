import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private baseUrl:string;
    

  constructor(private http: HttpClient) {
    this.baseUrl= 'http://localhost:8080/profil';
  }

  getProfil(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}`+`/profil`+`/${id}`); 
   }

  createProfil(profil: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+`/addprofil`, profil); } 

  updateProfil(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}`+`/updateprofil`+`/${id}`, value); } 

      deleteProfil(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}`+`/supprimerprofil/${id}`, {responseType: 'text' }); 
      }  
        
  getProfilsList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+`/profils`); }

}


