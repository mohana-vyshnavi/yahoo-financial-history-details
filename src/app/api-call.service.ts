import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiCallService {

  constructor(public http: HttpClient) {
  }
  getData() {
    // http get call for getting the data from json file in assets
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-histories?region=US&lang=en&symbol=NBEV&from=1231866000&to=1547524844&events=div&interval=1d");
    xhr.setRequestHeader("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "12c969ef39msh2f1457a5fad281dp1824c0jsn6327fc38b570");

    xhr.send(data);
    return this.http.get('./assets/data.json');
  }
}
