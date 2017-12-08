import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../shared/event.service';


/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
  providers: [EventService]
})
export class FormPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventService) {
    this.item = navParams.get("item");
    console.log(this.item);
    this.eventService.selectedEvent
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
    
  }

}
