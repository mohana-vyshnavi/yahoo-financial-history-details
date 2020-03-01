import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiCallService {

  constructor(public http: HttpClient) {
  }
  getData() {
    // http get call for getting the data from json file in assets
    return this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data?frequency=1d&filter=history&period1=1546448400&period2=1562086800&symbol=AMRN',
      {
        headers: {
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
          "x-rapidapi-key": "12c969ef39msh2f1457a5fad281dp1824c0jsn6327fc38b570"
        }
      });
  }
}
