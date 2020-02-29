import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-mat-table-view',
  templateUrl: './mat-table-view.component.html',
  styleUrls: ['./mat-table-view.component.scss']
})
export class MatTableViewComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['date', 'open', 'high', 'low', 'close', 'volume'];
  dataSource = new MatTableDataSource();
  @Input() apiData: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.apiData);
    this.dataSource.sort = this.sort;
  }
}
