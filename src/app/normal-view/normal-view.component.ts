import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-normal-view',
  templateUrl: './normal-view.component.html',
  styleUrls: ['./normal-view.component.scss']
})
export class NormalViewComponent implements OnInit {
  slideText = 'Slide for card view'
  subViewType = 'table';
  apiData:any = [];
  constructor(public apiService: ApiCallService) {
    this.apiService.getData().subscribe((result: any) => {
      this.apiData = result.sort(function (a, b) {
        const date1 = new Date(a.Date);
        const date2 = new Date(b.Date);
        return (date1.getMilliseconds() - date2.getMilliseconds()) ? true : false;
      }).reverse();
    })
  }
  ngOnInit() {
  }
  changeView(event) {
    this.subViewType = event.target.checked == true ? 'card' : 'table';
    this.slideText = event.target.checked == true ? 'Slide for table view' : 'Slide for card view';
  }
}

