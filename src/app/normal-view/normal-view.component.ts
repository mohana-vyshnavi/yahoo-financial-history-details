import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-view',
  templateUrl: './normal-view.component.html',
  styleUrls: ['./normal-view.component.scss']
})
export class NormalViewComponent implements OnInit {
  slideText = 'Slide for card view'
  subViewType = 'table';
  constructor() { }

  ngOnInit() {
  }
  changeView(event) {
    this.subViewType = event.target.checked == true ? 'card' : 'table';
    this.slideText = event.target.checked == true ? 'Slide for table view' : 'Slide for card view';
  }
}

