import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/service/item.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-loaned-items-list',
  templateUrl: './loaned-items-list.component.html',
  styleUrls: ['./loaned-items-list.component.scss']
})
export class LoanedItemsListComponent implements OnInit {

  public items: Item[];
  constructor(
    private itemService: ItemsService
  ) {
    this.items = this.itemService.loanedItems;

  }

  ngOnInit() {
  }
}
