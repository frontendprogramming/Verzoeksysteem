import { Component, OnInit } from '@angular/core';
import { LoanedItem } from 'src/app/models/loaned-item.model';
import { ItemsService } from 'src/app/service/item.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  public items: LoanedItem[] = [];

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
