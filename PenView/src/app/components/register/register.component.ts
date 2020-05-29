import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person } from '../../DatosPen/Person';
import { PersonService } from '../../servicios/person.service';

interface Rol {
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rols: Rol[] = [
    {viewValue: '         '},
    {viewValue: 'Arrendador'},
    {viewValue: 'Persona Natural'}
  ];

  hide = true;

//@HostBinding('class') classes = 'row';

person: Person = { 
    id_pn: 0,
    nombres_pn: '',  
    apellidos_pn: '', 
    ocupacion_pn: '', 
    ciudad_pn: '',
    telefono_pn: 0, 
    email_pn: '',
    password_pn: ''
};

  
  constructor(private personservice: PersonService) { }

  ngOnInit() {

  }

  SavePersona(){
    delete this.person.id_pn;
  
    this.personservice.registrarPersona(this.person)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }
  }

  



