import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DetailsPage } from "../details/details";
import { AppService } from "../../app/service/app.service";

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
  items: any;
  constructor(
    private appService: AppService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.appService.getRptra().subscribe(response => {
      this.items = response.data.children;
      console.log(JSON.stringify(this.items));
    });
  }

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
