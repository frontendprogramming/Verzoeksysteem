import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/service/item.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  public items: Item[] = [];

  constructor(
    private itemService: ItemsService
  ) { }

  ngOnInit() {
    this.items = this.itemService.waitingRequests;
  }
  refreshItems(event) {
    this.itemService.refreshItems();
  }

}
