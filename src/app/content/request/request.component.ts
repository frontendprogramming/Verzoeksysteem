import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/service/item.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { RequestStatus } from 'src/app/models/request-status.model';
import { AuthorizationService } from 'src/app/service/authorization.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  
})
export class RequestComponent implements OnInit {

  public items: Item[] = [];
  public rol: string;
  @Output() stateChnge: EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private itemService: ItemsService,
    private authorizationService: AuthorizationService,
    private db: AngularFireDatabase){}

  ngOnInit() {
    this.items = this.itemService.myRequests;
    this.rol = this.authorizationService.currentUser.role;
  }
  
  cancelRequest(request:Item) {
    this.db.database.ref(`items/${request.id}`).update({
      status: RequestStatus.Available
    }, callback => {
      this.stateChnge.emit(false);
      this.refreshItems();
    });
  }
  refreshItems() {
    this.itemService.refreshItems();
    window.location.reload();
  }
}
