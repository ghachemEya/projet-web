import { Component, OnInit } from '@angular/core';
import { fakeformateursService } from '../fakeformateurs.service';
import { Formateurs } from '../formateurs';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  constructor(private formateurfakeservice: fakeformateursService) { }

  ngOnInit(): void {
  }
  addFormateur(formateur: Formateurs) {
    console.log(formateur);
    this.formateurfakeservice.add(formateur);
    }
}
