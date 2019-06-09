import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AvailableItem } from '../models/available-item.model';

@Injectable({
  providedIn: 'root'
})
export class AvailableItemsService {

  public availableItems: AvailableItem[] = [];

  constructor(
    private db: AngularFireDatabase
  ) {
    this.db.database.ref('available-items').on('value', data => {
      data = data.val();
      for (const docId in data) {
        if (data.hasOwnProperty(docId)) {
          this.availableItems.push(data[docId]);
        }
    }
    });
  }
}
