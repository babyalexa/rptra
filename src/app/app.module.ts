import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { DetailsPage } from "../pages/details/details";
import { DrivePage } from "../pages/drive/drive";
import { StreetViewPage } from "../pages/street-view/street-view";
import { FormPage } from "../pages/form/form";
import { FeedsPage } from "../pages/feeds/feeds";
import { EventDetailsPage } from "../pages/event-details/event-details";
import { ListRptraPage } from "../pages/list-rptra/list-rptra";
import { HttpModule } from "@angular/http";
import { Ionic2RatingModule } from "ionic2-rating";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms'
import { CallNumber } from "@ionic-native/call-number";
var config = {
  apiKey: "AIzaSyCGo3o1Xh1sWz9c_s8sfnmD2BW8vqmjM54",
  authDomain: "rptrapps-1512587984690.firebaseapp.com",
  databaseURL: "https://rptrapps-1512587984690.firebaseio.com",
  projectId: "rptrapps-1512587984690",
  storageBucket: "rptrapps-1512587984690.appspot.com",
  messagingSenderId: "899919673932"
};
//firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    DetailsPage,
    DrivePage,
    StreetViewPage,
    FormPage,
    FeedsPage,
    EventDetailsPage,
    ListRptraPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    DetailsPage,
    DrivePage,
    StreetViewPage,
    FormPage,
    FeedsPage,
    EventDetailsPage,
    ListRptraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CallNumber
  ]
})
export class AppModule {}
