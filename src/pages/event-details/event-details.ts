import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../shared/event.service';


/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
  providers: [EventService]
})
export class EventDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

}
