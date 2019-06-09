import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoanedItem } from 'src/app/models/loaned-item.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { RequestStatus } from 'src/app/models/request-status.model';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.scss']
})
export class RequestItemComponent implements OnInit {

  @Input() request: LoanedItem;
  @Output() stateChnge: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
  }
  approveRequest(request: LoanedItem) {
    this.db.database.ref(`loaned-items/${request.id}`).update({
      status: RequestStatus.Approved
    }, callback => {
      this.stateChnge.emit(true);
    });

  }
  declineRequest(request: LoanedItem) {
    this.db.database.ref(`loaned-items/${request.id}`).update({
      status: RequestStatus.Rejected
    }, callback => {
      this.stateChnge.emit(false);
    });
  }

}
