import { Component, OnInit, Input } from '@angular/core';
import { LoanedItem } from 'src/app/models/loaned-item.model';

@Component({
  selector: 'app-loaned-item',
  templateUrl: './loaned-item.component.html',
  styleUrls: ['./loaned-item.component.scss']
})
export class LoanedItemComponent implements OnInit {

  @Input() loanedItem: LoanedItem;

  constructor() { }

  ngOnInit() {
  }

}
