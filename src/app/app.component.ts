import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  routes = [
    {
      name: 'Start',
      routerLink: 'start',
      icon: 'menu'
    },
    {
      name: 'ding 2',
      routerLink: 'someLink',
      icon: 'menu'
    }
  ];
  public constructor(
    ) {
  }

  ngOnInit() {
  }


}
