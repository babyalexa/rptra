import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { HomePage } from "../home/home";
import { ListRptraPage } from "../list-rptra/list-rptra";
import { FeedsPage } from "../feeds/feeds";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ListRptraPage;
  tab3Root = FeedsPage;
  tab4Root = AboutPage;

  constructor() {}
}
