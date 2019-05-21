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
      icon: 'home'
    },
    {
      name: 'next',
      routerLink: 'next',
      icon: 'android'
    }
  ];
  public constructor(
    ) {
  }

  ngOnInit() {
  }


}
