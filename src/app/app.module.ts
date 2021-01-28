import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ParticipantsComponent } from './participants/participants.component';
import { FormateurComponent } from './formateurs/formateurs/formateur.component';
import { AddFormateurComponent } from './formateurs/add-formateur/add-formateur.component';
import { EditFormateurComponent } from './formateurs/edit-formateur/edit-formateur.component';
import {FormateurItemComponent} from "./formateurs/formateur-item/formateur-item.component";
import { FormsModule, NgForm } from '@angular/forms';


const appRoutes: Routes = [
  {
  path: 'list',
  component: SessionItemListComponent},
  {
    path: 'participants',
    component: ParticipantsComponent
  },
  {
    path: 'formateur',
    component: FormateurComponent
  },
  { path: 'formateur/addformateur', component: AddFormateurComponent },
  { path: 'formateur/edit/:id', component: EditFormateurComponent },
  {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PagenotfoundComponent,
    NavComponent,
    ParticipantsComponent,
    FormateurComponent,
    AddFormateurComponent,
    EditFormateurComponent,
    FormateurItemComponent
    
   
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
