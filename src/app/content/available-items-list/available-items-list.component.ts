import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/service/item.service';
import { Item } from 'src/app/models/item.model';


@Component({
  selector: 'app-available-items-list',
  templateUrl: './available-items-list.component.html',
  styleUrls: ['./available-items-list.component.scss']
})
export class AvailableItemsListComponent {
  public items: Item[] = [];

  constructor(
    private itemService: ItemsService
  ) {
    this.items = this.itemService.availiableItems;
  }
}
