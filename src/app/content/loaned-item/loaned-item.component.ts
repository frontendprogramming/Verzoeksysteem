import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/service/item.service';
import { AuthorizationService } from 'src/app/service/authorization.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { RequestStatus } from 'src/app/models/request-status.model';

@Component({
  selector: 'app-loaned-item',
  templateUrl: './loaned-item.component.html',
  styleUrls: ['./loaned-item.component.scss']
})
export class LoanedItemComponent implements OnInit {

  @Input() loanedItem: Item;

  constructor(
    private itemService: ItemsService,
    private authorizationService: AuthorizationService,
    private db: AngularFireDatabase){}

  ngOnInit() {
  }

  returnItem(request:Item) {
    this.db.database.ref(`items/${request.id}`).update({
      status: RequestStatus.Available
    }, callback => {
      this.refreshItems();
    });
  }
  refreshItems() {
    this.itemService.refreshItems();
  }
}
