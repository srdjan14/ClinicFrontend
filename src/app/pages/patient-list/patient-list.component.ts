import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  todos = [
    { name: 'Ime1', surname: 'Prezime1', email: 'email1@gmail.com', JMBG: 214214125215 },
    { name: 'Ime2', surname: 'Prezime2', email: 'email2@gmail.com', JMBG: 214126611421 },
    { name: 'Ime3', surname: 'Prezime3', email: 'email3@gmail.com', JMBG: 621421412129 },

  ]

  constructor() { }

  ngOnInit() {
  }

}
