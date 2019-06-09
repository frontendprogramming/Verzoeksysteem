import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/service/item.service';
import { LoanedItem } from 'src/app/models/loaned-item.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { RequestStatus } from 'src/app/models/request-status.model';
import { AuthorizationService } from 'src/app/service/authorization.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  
})
export class RequestComponent implements OnInit {

  public items: LoanedItem[] = [];
  public rol: string;
  @Output() stateChnge: EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private itemService: ItemsService,
    private authorizationService: AuthorizationService) {}
    private db: AngularFireDatabase

  ngOnInit() {
    this.items = this.itemService.myRequests;
    this.rol = this.authorizationService.currentUser.role;
  }
  
  cancelRequest(request: LoanedItem) {
    this.db.database.ref(`loaned-items/${request.id}`).update({
      status: RequestStatus.Canceled
    }, callback => {
      this.stateChnge.emit(false);
    });
  }
  refreshItems(event) {
    this.itemService.refreshItems();
  }
}
