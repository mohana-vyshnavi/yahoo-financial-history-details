import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yahoo financial history details'; // title of the app component
  activeView = 'material'; // to know the active view

  constructor(public router: Router) {
    this.router.navigateByUrl('material-view');
  }

  /**
   * @param viewType type of view the user wanted to see
   *  when you click on one of the view changing buttons then this method is called.
   */
  appViewChanged(viewType) {
    this.activeView = viewType;
    viewType === 'normal' ? this.router.navigateByUrl('normal-view') : this.router.navigateByUrl('material-view');
  }
}
