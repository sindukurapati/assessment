import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assessment';

  constructor(private router: Router) {

  }
  public tabs = [
    {'title': 'Tab 1', id:1, active: true},
    {'title': 'Tab 2', id:2,  active: false},
    {'title': 'Tab 3', id:3, active: false},
  ];

  public changeActiveTab() {
    this.tabs.forEach(tab => tab.active = false);
    this.tabs[0].active = true;
  }

}
