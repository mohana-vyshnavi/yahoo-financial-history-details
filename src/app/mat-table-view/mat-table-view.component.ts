import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-mat-table-view',
  templateUrl: './mat-table-view.component.html',
  styleUrls: ['./mat-table-view.component.scss']
})
export class MatTableViewComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['Date', 'Open', 'High', 'Low', 'Close', 'Volume']; // colums data
  dataSource = new MatTableDataSource(); // table data
  @Input() apiData: any; // api data
  @ViewChild(MatSort, { static: true }) sort: MatSort; // mat sot variable

  ngOnInit() {
  }
  ngOnChanges() {
    // when ever data is changed the table data is reasigned
    this.dataSource = new MatTableDataSource(this.apiData);
    this.dataSource.sort = this.sort;
  }
}
