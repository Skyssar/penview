import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lessor } from '../DatosPen/Lessors';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  
  URL: 'http://localhost:3000/api';
  //url: 'http://localhost:8080/Penv/lessors';

  constructor(private http: HttpClient) { }

  getpersonanatural(){

    return this.http.get( '${this.URL}/person' );
  }

  getLessors(){
    return this.http.get<Lessor[]>(this.URL);
  }
}
