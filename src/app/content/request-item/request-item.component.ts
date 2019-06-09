import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RequestStatus } from 'src/app/models/request-status.model';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.scss']
})
export class RequestItemComponent implements OnInit {

  @Input() request: Item;
  @Output() stateChnge: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
  }
  approveRequest(request: Item) {
    this.db.database.ref(`items/${request.id}`).update({
      status: RequestStatus.Approved
    }, callback => {
      this.stateChnge.emit(true);
    });

  }
  declineRequest(request: Item) {
    this.db.database.ref(`items/${request.id}`).update({
      status: RequestStatus.Available
    }, callback => {
      this.stateChnge.emit(false);
    });
  }

}
