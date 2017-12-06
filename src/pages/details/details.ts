import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DrivePage } from "../drive/drive";
import { StreetViewPage } from "../street-view/street-view";
import { FormPage } from "../form/form";

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetailsPage");
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
