import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yahoo financial history details';
  activeView = 'material';
  constructor(public router: Router) {
    this.router.navigateByUrl('material-view');
  }
  appViewChanged(viewType) {
    this.activeView = viewType;
    viewType === 'normal' ? this.router.navigateByUrl('normal-view') : this.router.navigateByUrl('material-view');
  }
}
