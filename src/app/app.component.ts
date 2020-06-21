import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AppComponent {
  title = 'assessment';

  constructor(private router: Router) {

  }
  public tabs = [
    { 'title': 'Tab 1', id: 1, active: true },
    { 'title': 'Tab 2', id: 2, active: false },
    { 'title': 'Tab 3', id: 3, active: false },
  ];
  

  public dropdownSettings = {
    id: "Sample id", 
    name: "Sample Name", 
    settings:[
      {name: 'Save', id: 'saveAction'},
      {name: 'Edit', id: 'editAction'},
      {name: 'Delete', id: 'deleteAction'}
    ] };

  public changeActiveTab() {
    this.tabs.forEach(tab => tab.active = false);
    this.tabs[0].active = true;
  }

}
