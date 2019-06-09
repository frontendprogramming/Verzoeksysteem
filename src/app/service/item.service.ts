import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoanedItem } from '../models/loaned-item.model';
import { RequestStatus } from '../models/request-status.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public loanedItems: LoanedItem[] = [];
  public waitingRequests: LoanedItem[] = [];
  public allLoanedItems: LoanedItem[] = [];
 
  constructor(
    private db: AngularFireDatabase
  ) {
    this.db.database.ref('loaned-items').once('value').then(data => {
      data = data.val();
      for (const docId in data) {
        if (data.hasOwnProperty(docId)) {
          data[docId]['id'] = docId;
          if (data[docId]['status'] === RequestStatus.Approved) {
            this.loanedItems.push(data[docId]);
          }
          if (data[docId]['status'] === RequestStatus.waitingForApproval) {
            this.waitingRequests.push(data[docId]);
          }
          this.allLoanedItems.push(data[docId]);
        }
      }
    });
  }
  refreshItems() {
    this.loanedItems =  [];
    this.waitingRequests = [];
    this.allLoanedItems = [];
    this.db.database.ref('loaned-items').once('value').then(data => {
      data = data.val();
      for (const docId in data) {
        if (data.hasOwnProperty(docId)) {
          data[docId]['id'] = docId;
          if (data[docId]['status'] === RequestStatus.Approved) {
            this.loanedItems.push(data[docId]);
          }
          if (data[docId]['status'] === RequestStatus.waitingForApproval) {
            this.waitingRequests.push(data[docId]);
          }
          this.allLoanedItems.push(data[docId]);
        }
      }
    });
  }

}
