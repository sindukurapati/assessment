import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public icons = [
    { title: 'status', icon: 'fa-heartbeat', status: 'active' },
    { title: 'share', icon: 'fa-share-alt', status: 'active' },
    { title: 'filter', icon: 'fa-filter', status: 'active' },
    { title: 'calendar', icon: 'fa-calendar', status: 'active' }];

  public statuses = ['active', 'selected', 'toggle-on', 'inactive'];

  public currentIndex = 0;
  public sampleItems = [{
    title: "Sample Item",
    keyFigures: ["Sample key figure", "Sample key figure 2"]
  },
  {
    title: "Sample Item 1",
    keyFigures: ["Sample key figure 1", "Sample key figure 2"]
  },
  {
    title: "Sample Item 2",
    keyFigures: ["Sample key figure 2", "Sample key figure 2"]
  },
  {
    title: "Sample Item 3",
    keyFigures: ["Sample key figure 3", "Sample key figure 2"]
  }];

  public selectedItem = this.sampleItems[0];

  constructor() { }

  ngOnInit(): void {
  }

  public getNextItem() {
    if (this.currentIndex === this.sampleItems.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
    this.selectedItem = this.sampleItems[this.currentIndex];
  }

  public getPrevItem() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.sampleItems.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
    this.selectedItem = this.sampleItems[this.currentIndex];
  }

  public changeStatus(icon) {
    console.log(icon);
    const index = this.statuses.indexOf(icon.status);
    const iconIndex = this.icons.findIndex(i => i.title === icon.title);
    if (index === this.statuses.length - 1) {
      this.icons[iconIndex].status = this.statuses[0];
    } else {
      this.icons[iconIndex].status = this.statuses[index + 1];
    }
  }

}
