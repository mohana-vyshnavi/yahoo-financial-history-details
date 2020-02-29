import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.scss']
})
export class MaterialViewComponent implements OnInit, OnDestroy {
  slideText = 'Slide for card view';
  subViewType = 'table';
  apiData: any = [];
  apiSub: Subscription;
  constructor(public apiService: ApiCallService) {
    this.apiSub = this.apiService.getData().subscribe((result: any) => {
      this.apiData = result.sort((a, b) => {
        const date1 = new Date(a.Date);
        const date2 = new Date(b.Date);
        return (date1.getMilliseconds() - date2.getMilliseconds()) ? true : false;
      }).reverse();
    });
  }

  ngOnInit() {
  }
  changeView(event) {
    this.subViewType = event.checked === true ? 'card' : 'table';
    this.slideText = event.checked === true ? 'Slide for table view' : 'Slide for card view';
  }
  ngOnDestroy() {
    this.apiSub.unsubscribe();
  }
}
