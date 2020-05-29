import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessor',
  templateUrl: './lessor.component.html',
  styleUrls: ['./lessor.component.css']
})
export class LessorComponent implements OnInit {

  nameAccount = "Andres Felipe Rivero Burgos"
  namePension = "Libertadora"

  constructor() { }

  ngOnInit(): void {
  }

}
