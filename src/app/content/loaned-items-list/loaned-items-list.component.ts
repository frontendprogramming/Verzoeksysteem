import { Component, OnInit } from '@angular/core';
import { LoanedItemsService } from 'src/app/service/loaned-items.service';
import { LoanedItem } from 'src/app/models/loaned-item.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-loaned-items-list',
  templateUrl: './loaned-items-list.component.html',
  styleUrls: ['./loaned-items-list.component.scss']
})
export class LoanedItemsListComponent implements OnInit {

  public items: LoanedItem[] = [];
  constructor(
    private itemService: LoanedItemsService
  ) {
  }

  ngOnInit() {
    this.items = this.itemService.loanedItems;
  }

}
