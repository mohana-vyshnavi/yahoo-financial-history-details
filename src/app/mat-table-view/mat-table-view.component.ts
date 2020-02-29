import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface PeriodicElement {
  open: number;
  date: string;
  high: number;
  low: number;
  close: number;
  volume: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: '29-02-2020', open: 74355, high: 10079, low: 354, close: 0, volume: 0 },
  { date: '29-02-2020', open: 647746, high: 40026, low: 4545, close: 0, volume: 0 },
  { date: '29-02-2020', open: 547365, high: 6941, low: 543534, close: 0, volume: 0 },
  { date: '29-02-2020', open: 734633, high: 90122, low: 35435, close: 0, volume: 0 },
  { date: '29-02-2020', open: 34243, high: 10811, low: 34545, close: 0, volume: 0 },
  { date: '29-02-2020', open: 32432423, high: 12107, low: 345345, close: 0, volume: 0 },
  { date: '29-02-2020', open: 343434, high: 140067, low: 5345, close: 0, volume: 0 },
  { date: '29-02-2020', open: 3354545, high: 159994, low: 435345, close: 0, volume: 0 },
  { date: '29-02-2020', open: 54543232, high: 189984, low: 543543, close: 0, volume: 0 },
  { date: '29-02-2020', open: 4534532, high: 201797, low: 353453, close: 0, volume: 0 },
];

@Component({
  selector: 'app-mat-table-view',
  templateUrl: './mat-table-view.component.html',
  styleUrls: ['./mat-table-view.component.scss']
})
export class MatTableViewComponent implements OnInit {
  displayedColumns: string[] = ['date', 'open', 'high', 'low', 'close', 'volume'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
