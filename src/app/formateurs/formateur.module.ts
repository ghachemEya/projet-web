import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurComponent } from './formateurs/formateur.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { RouterModule, Routes } from '@angular/router';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';

const FormateurRoutes: Routes = [
  {
  path: '',
  component: FormateurComponent,
  children: [{ path: 'addformateur', component: AddFormateurComponent }]
  }
  ];

@NgModule({
  declarations: [FormateurComponent, AddFormateurComponent],
  imports: [RouterModule.forChild(FormateurRoutes),
    CommonModule,
 
  ],
  bootstrap: [FormateurComponent]
})
export class FormateurModule { }






