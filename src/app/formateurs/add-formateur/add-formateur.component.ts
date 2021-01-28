import { Component, OnInit } from '@angular/core';
import { fakeformateursService } from '../fakeformateurs.service';
import { Formateur } from '../formateur';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  constructor(private formateurfakeservice: fakeformateursService) { }

  ngOnInit(): void {
  }
  addFormateur(formateur: Formateur) {
    console.log(formateur);
    this.formateurfakeservice.add(formateur);
    }
}
