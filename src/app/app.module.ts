import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MatTableViewComponent } from './mat-table-view/mat-table-view.component';
import { MatCardViewComponent } from './mat-card-view/mat-card-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { NormalViewComponent } from './normal-view/normal-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatDividerModule, MatTableModule, MatSortModule, MatPaginatorModule,
  MatSlideToggleModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ApiCallService } from './api-call.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent, // normal table view component
    MatTableViewComponent, // material table view component
    MatCardViewComponent, // material card view component
    CardViewComponent, // normal card view component
    MaterialViewComponent, // parent material view component
    NormalViewComponent // parent normal view component
  ],
  imports: [
    // material modules
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    // common imports for entire app.
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ApiCallService], // api call service for geting json data
  bootstrap: [AppComponent]
})
export class AppModule { }
