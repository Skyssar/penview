import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required,Validators.email]);
  

  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingreso(){
    this.router.navigate(['map']);
  }

  registro(){
    this.router.navigate(['register']);
  }

  ingresoMap(){
    this.router.navigate(['map']);
  }

}
