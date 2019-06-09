import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  
})
export class RequestComponent implements OnInit {

 
  constructor() { 
    
  }

  ngOnInit() {

  }

  contacts = [
    {
      name: "Raspberry pi 3",
      desc: "Mini computer bebruikt voor veel dingen binnen school",
      date: "Moet terug op 13-6-2019",
      status: "goedgekeurd"
    }, 

    {
      name: "Raspberry pi 3",
      desc: "Mini computer bebruikt voor veel dingen binnen school",
      date: "Moet terug op 13-6-2019",
      status: "afgekeurd"
    },

    {
      name: "Raspberry pi 3",
      desc: "Mini computer bebruikt voor veel dingen binnen school",
      date: "Moet terug op 13-6-2019",
      status: "teruggebracht"
    },

    {
      name: "Raspberry pi 3",
      desc: "Mini computer bebruikt voor veel dingen binnen school",
      date: "Moet terug op 13-6-2019",
      status: "wachtopkeuring"
    },
  ]
  

}
