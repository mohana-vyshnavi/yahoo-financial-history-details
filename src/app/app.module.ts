import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MatTableViewComponent } from './mat-table-view/mat-table-view.component';
import { MatCardViewComponent } from './mat-card-view/mat-card-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { NormalViewComponent } from './normal-view/normal-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatDividerModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSlideToggleModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ApiCallService } from './api-call.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    MatTableViewComponent,
    MatCardViewComponent,
    CardViewComponent,
    ErrorModalComponent,
    MaterialViewComponent,
    NormalViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
