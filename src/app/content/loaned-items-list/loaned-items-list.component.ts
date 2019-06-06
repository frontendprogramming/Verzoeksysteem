import { Component, OnInit } from '@angular/core';
import { LoanedItem } from 'src/app/models/loaned-item.model';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-loaned-items-list',
  templateUrl: './loaned-items-list.component.html',
  styleUrls: ['./loaned-items-list.component.scss']
})
export class LoanedItemsListComponent implements OnInit {

  public items: LoanedItem[] = [];
  constructor(
    private itemService: ItemService
  ) {
  }

  ngOnInit() {
    this.items = this.itemService.LoanedItems;
  }

}
