import { Injectable } from '@angular/core';
import { Formateurs } from './formateurs';


@Injectable({
  providedIn: 'root'
})
export class fakeformateursService {

  constructor() { }
  get() {return Formateurs;}
  add(sessionItem: Formateurs) {
        console.log("sucess");
    }

    delete(sessionItem: Formateurs) {
        console.log("sucess");
      
      }
      }

