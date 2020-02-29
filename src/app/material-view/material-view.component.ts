import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.scss']
})
export class MaterialViewComponent implements OnInit {
  slideText = 'Slide for card view'
  subViewType = 'table';
  constructor() { }

  ngOnInit() {
  }
  changeView(event) {
    this.subViewType = event.checked == true ? 'card' : 'table';
    this.slideText = event.checked == true ? 'Slide for table view' : 'Slide for card view';
  }
}
