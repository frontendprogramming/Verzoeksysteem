import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-loaned-item',
  templateUrl: './loaned-item.component.html',
  styleUrls: ['./loaned-item.component.scss']
})
export class LoanedItemComponent implements OnInit {

  @Input() loanedItem: Item;

  constructor() { }

  ngOnInit() {
  }

}
