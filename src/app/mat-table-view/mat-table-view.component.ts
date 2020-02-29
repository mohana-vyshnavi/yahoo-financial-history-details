import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PeriodicElement } from '../app.constants';



@Component({
  selector: 'app-mat-table-view',
  templateUrl: './mat-table-view.component.html',
  styleUrls: ['./mat-table-view.component.scss']
})
export class MatTableViewComponent implements OnInit {
  displayedColumns: string[] = ['date', 'open', 'high', 'low', 'close', 'volume'];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @Input('apiData') apiData: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.apiData);
    this.dataSource.sort = this.sort;
  }
}
