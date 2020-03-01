import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.scss']
})
export class MaterialViewComponent implements OnInit, OnDestroy {
  slideText = 'Slide for card view'; // user understandable message
  subViewType = 'table'; // current active view of user
  apiData: any = []; // api data to pass to child components
  apiSub: Subscription;
  constructor(public apiService: ApiCallService) {
    // json data htpp api call subscription
    this.apiSub = this.apiService.getData().subscribe((result: any) => {
      result.prices = result.prices.map((obj) => {
        const date1 = new Date(obj.date).toLocaleDateString();
        obj.date = date1;
        return obj;
      })
      this.apiData = result.prices.sort((a, b) => {
        return (a.date - b.date) ? true : false;
      }).reverse();
      // the above code is for sorting the date and reversing the array for displaying the latest update
    });
  }

  ngOnInit() {
  }
  // view change method for table and cards view
  changeView(event) {
    this.subViewType = event.checked === true ? 'card' : 'table';
    this.slideText = event.checked === true ? 'Slide for table view' : 'Slide for card view';
  }
  ngOnDestroy() {
    // unscribing the after component destroying
    this.apiSub.unsubscribe();
  }
}
