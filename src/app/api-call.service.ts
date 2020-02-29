import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiCallService {

  constructor(public http: HttpClient) {
  }
  getData() {
    return this.http.get('./assets/data.json');
  }
}
