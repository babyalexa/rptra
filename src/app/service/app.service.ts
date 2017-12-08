import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class AppService {
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http = http;
    this.baseUrl = "http://api.jakarta.go.id/ruang-publik";
  }

  getRptra() {
    return this.http.get(this.baseUrl + "/rptra").map(res => res.json());
  }

  getRptraDetails(lat, lng, nama, width) {
    return this.http.get("http://rptra.azurewebsites.net/test.php?lat="+lat+"&lng="+lng+"&nama="+nama+"&width="+width).map(res => res.json());
    
  }
}
