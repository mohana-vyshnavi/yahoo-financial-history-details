import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-normal-view',
  templateUrl: './normal-view.component.html',
  styleUrls: ['./normal-view.component.scss']
})
export class NormalViewComponent implements OnInit, OnDestroy {
  slideText = 'Slide for card view'; // message fro the use understanding
  subViewType = 'table'; // to know which view the user in.
  apiData: any = []; // api data to pass for child components
  apiSub: Subscription; // for unsubscribing
  constructor(public apiService: ApiCallService) {
    // json data htpp api call subscription
    this.apiSub = this.apiService.getDataFromJson().subscribe((result: any) => {
      this.apiData = result.sort((a, b) => {
        return (a.date - b.date) ? true : false;
      }).reverse();
      // the above code is for sorting the date and reversing the array for displaying the latest update
    });
  }

  ngOnInit() {
  }
  changeView(event) {
    //  when user tchenges the view from table to cards
    this.subViewType = event.target.checked === true ? 'card' : 'table';
    this.slideText = event.target.checked === true ? 'Slide for table view' : 'Slide for card view';
  }
  ngOnDestroy() {
    // to unsubscribe the api on the component destruction.
    this.apiSub.unsubscribe();
  }
}
