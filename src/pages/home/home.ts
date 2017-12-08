import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EventService]
})
export class HomePage {

  constructor(public navCtrl: NavController, public eventService: EventService) {
  }
  

}
