import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-card-view',
  templateUrl: './mat-card-view.component.html',
  styleUrls: ['./mat-card-view.component.scss']
})
export class MatCardViewComponent implements OnInit {

  @Input('apiData') apiData: any;
  constructor() { }
  monthArray=['January','February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];
  ngOnInit() {
  }
  ngOnChanges(){
    
  }
  getDay(date) {
    const dateValue = new Date(date);
    return dateValue.getDate();
  }
  getMonth(date) {
    const dateValue = new Date(date);
    return this.monthArray[dateValue.getMonth()];
  }
  getYear(date) {
    const dateValue = new Date(date);
    return dateValue.getFullYear();
  }
}
