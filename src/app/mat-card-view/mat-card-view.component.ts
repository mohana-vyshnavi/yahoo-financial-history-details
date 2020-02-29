import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-card-view',
  templateUrl: './mat-card-view.component.html',
  styleUrls: ['./mat-card-view.component.scss']
})
export class MatCardViewComponent implements OnInit {

  @Input() apiData: any; // api data from material view component

  constructor() { }

  monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']; // to get full name of the month

  ngOnInit() {
  }
  /**
   * @param date date of the row
   * to  get date from the date
   */
  getDay(date) {
    const dateValue = new Date(date);
    return dateValue.getDate();
  }
  /**
   * @param date date of the row
   * to  get month from the date
   */
  getMonth(date) {
    const dateValue = new Date(date);
    return this.monthArray[dateValue.getMonth()];
  }
  /**
   * @param date date of the row
   * to  get year from the date
   */
  getYear(date) {
    const dateValue = new Date(date);
    return dateValue.getFullYear();
  }
}
