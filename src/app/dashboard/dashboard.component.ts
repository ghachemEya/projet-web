import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../admin/fakesessionitem.service';
import { Session } from '../admin/session';
import { SessionItemListComponent } from '../admin/session-item-list/session-item-list.component';
import { fakeformateursService } from '../formateurs/fakeformateurs.service';
import { Formateur } from '../formateurs/formateur';
import { fakeparticipantService } from '../participants/fakeparticipants.service';
import { Participant } from '../participants/participant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sessionItems: Session[] | undefined;
  participantItems : Participant[] | undefined;
  formateurItems : Formateur[] | undefined;
  taille : any;
  tailleParticipants : any;
  tailleFormateurs : any;
  constructor(private formateurItemsService : fakeformateursService, private sessionItemService: FakesessionitemService, private participantItemService: fakeparticipantService) { }

  ngOnInit(): void {
    
    this.sessionItems= this.sessionItemService.get();
    this.taille = this.sessionItems.length;
    console.log(this.sessionItems);

    this.participantItems = this.participantItemService.get();
    this.tailleParticipants = this.participantItems.length;

    this.formateurItems = this.formateurItemsService.get();
    this.tailleFormateurs = this.formateurItems.length;
  }

 

}
