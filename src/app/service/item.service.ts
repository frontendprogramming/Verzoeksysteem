import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoanedItem } from '../models/loaned-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public loanedItems: LoanedItem[] = [];
  public allLoanedItems: LoanedItem[] = [];
 
  constructor(
    private db: AngularFireDatabase
  ) {
    this.db.database.ref('loaned-items').once('value').then(data => {
      data = data.val();
      for (const docId in data) {
        if (data.hasOwnProperty(docId)) {
          data[docId]['id'] = docId;
          if (this.isCurrentlyLoaned(data[docId]['endDate'])) {
            this.loanedItems.push(data[docId]);
          }
          this.allLoanedItems.push(data[docId]);
        }
      }
    });
  }
  isCurrentlyLoaned(endDate: string): boolean {
    const date = new Date();
    const currentTime = date.getTime();
    return Date.parse(endDate) > currentTime;
  }

}
