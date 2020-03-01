import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiCallService {

  constructor(public http: HttpClient) {
  }
  getData() {
    // http get call for getting the data from json file in assets
    return this.http.get('/getHistroy/getData');
  }
}
