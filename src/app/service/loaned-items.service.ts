import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { LoanedItem } from '../models/loaned-item.model';

@Injectable({
  providedIn: 'root'
})
export class LoanedItemsService {

  public loanedItems: LoanedItem[] = [];

  constructor(
    private db: AngularFireDatabase
  ) {
    this.db.database.ref('loaned-items').on('value', data => {
      data = data.val();
      for (const docId in data) {
        if (data.hasOwnProperty(docId)) {
          this.loanedItems.push(data[docId]);
        }
    }
    });
  }
}
