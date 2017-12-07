import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DrivePage } from "../drive/drive";
import { StreetViewPage } from "../street-view/street-view";
import { FormPage } from "../form/form";

declare var google;

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html"
})
export class DetailsPage {
  item: any;
  rate: any = 4;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get("item");
  }

  @ViewChild("map") mapRef: ElementRef;

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(
      this.item.location.latitude,
      this.item.location.longitude
    );

    const options = {
      center: location,
      zoom: 15,
      streetViewControl: false,
      mapTypeId: "roadmap"
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location, map);
  }
  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }

  viewDrive(item) {
    this.navCtrl.push(DrivePage);
  }
  viewStreet(item) {
    this.navCtrl.push(StreetViewPage);
  }
  viewForm(item) {
    this.navCtrl.push(FormPage);
  }
}
