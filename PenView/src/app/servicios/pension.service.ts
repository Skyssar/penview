import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pension } from '../DatosPen/Pension';

@Injectable({
  providedIn: 'root'
})
export class PensionService {

  URL: 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { }

  getPension(){
    return this.http.get( 'http://localhost:3000/api/pension' );
  }

  registrarPension(pension: Pension){
    return this.http.post( 'http://localhost:3000/api/pension', pension);
  }

  actualizarPension(id: string, update: Pension){
    return this.http.put( `${this.URL}/pension/${id}`, update);
  }

  eliminarPension(id: string){
    return this.http.delete( `${this.URL}/pension/${id}`);
  }
}
