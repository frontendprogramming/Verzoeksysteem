import { Component, OnInit } from '@angular/core';
import { AvailableItemsService } from 'src/app/service/available-items.service';
import { AvailableItem } from '../../models/available-item.model';


@Component({
  selector: 'app-available-items-list',
  templateUrl: './available-items-list.component.html',
  styleUrls: ['./available-items-list.component.scss']
})
export class AvailableItemsListComponent implements OnInit {
  public items: AvailableItem[] = [];

  public item1: AvailableItem = {
    name: 'item1',
    description: 'omschrijbienjgvahjdsb dsg dsg d fg sd g',
    status: 'bescchikbaar',
  };

  public item2: AvailableItem = {
    name: 'item2',
    description: 'omschrijbienjgvahjdsb dsg dsg d fg sd g',
    status: 'gereserveerd',
  }

  constructor(private itemService: AvailableItemsService) {}

  ngOnInit() {
    this.items = this.itemService.availableItems;
  }

}
