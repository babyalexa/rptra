import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DetailsPage } from "../details/details";

/**
 * Generated class for the ListRptraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-list-rptra",
  templateUrl: "list-rptra.html"
})
export class ListRptraPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListRptraPage");
  }

  // pushPage(){
  //   // push another page onto the navigation stack
  //   // causing the nav controller to transition to the new page
  //   // optional data can also be passed to the pushed page.
  //   this.navCtrl.push(OtherPage, {
  //     id: "123",
  //     name: "Carl"
  //   });
  // }

  viewDetails() {
    this.navCtrl.push(DetailsPage);
  }
}
