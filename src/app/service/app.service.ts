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
}
