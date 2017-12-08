import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DrivePage } from "../drive/drive";
import { StreetViewPage } from "../street-view/street-view";
import { FormPage } from "../form/form";
import { CallNumber } from '@ionic-native/call-number';
import { AppService } from "../../app/service/app.service";

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
  data: any;
  gambar: boolean = false;
  item: any;
  rate: any = 0;
  constructor(private appService: AppService, public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {
    this.item = navParams.get("item");
  }

  @ViewChild("map") mapRef: ElementRef;

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    this.appService.getRptraDetails(this.item.location.latitude, this.item.location.longitude, this.item.nama_rptra, 400).subscribe(response => {
      this.data = response;
      if (this.data.status == 'OK'){
        this.gambar = true;
        this.rate = this.data.result.rating;
      }
      // console.log(this.data);
    });
  }

  telepon(){
    this.callNumber.callNumber(this.item.telepon, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

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
    this.navCtrl.push(FormPage, {
      item: item
    });
  }
}
