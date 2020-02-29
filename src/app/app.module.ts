import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MatTableViewComponent } from './mat-table-view/mat-table-view.component';
import { MatCardViewComponent } from './mat-card-view/mat-card-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    MatTableViewComponent,
    MatCardViewComponent,
    CardViewComponent,
    ErrorModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
