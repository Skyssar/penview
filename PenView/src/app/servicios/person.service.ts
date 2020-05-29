import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../DatosPen/Person';


@Injectable({
  providedIn: 'root'
})

export class PersonService {

  URL: 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { }

  getPersona(){
    return this.http.get( 'http://localhost:3000/api/person' );
  }

  registrarPersona(persona: Person){
    return this.http.post( 'http://localhost:3000/api/person', persona);
  }

  actualizarPersona(id: string, update: Person){
    return this.http.put( `${this.URL}/persona/${id}`, update);
  }

  eliminarPersona(id: string){
    return this.http.delete( `${this.URL}/persona/${id}`);
  }
}
