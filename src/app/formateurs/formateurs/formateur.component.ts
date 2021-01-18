import { Component, OnInit } from '@angular/core';
import { fakeformateursService } from '../fakeformateurs.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css'],
  providers : [fakeformateursService]
})
export class FormateurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
