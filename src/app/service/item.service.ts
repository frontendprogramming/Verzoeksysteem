import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Item } from '../models/item.model';
import { Request } from '../models/request.model';
import { AppUser } from '../models/user.model';
import { LoanedItem } from '../models/loaned-item.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
// tslint:disable: no-string-literal
export class ItemService {
  private items: Item[] = [];
  private requests: Request[] = [];
  private users: AppUser[] = [];
  public loanedItems$: Observable<LoanedItem[]>;
  constructor(
    private db: AngularFireDatabase
  ) {
    console.log('hi')
    this.db.database.ref('items').on('value', data => {
      data = data.val();
      for (const docId in data) {
        if (data.hasOwnProperty(docId)) {
          this.items.push({
            name: data[docId]['name'],
            id: docId
          });
        }
      }
    });
    this.db.database.ref('request').on('value', data => {
      data = data.val();
      for (const docId in data) {
        if (data.hasOwnProperty(docId)) {
          this.requests.push({
            endDate: data[docId]['endDate'],
            startDate: data[docId]['startDate'],
            itemRef: data[docId]['itemRef'],
            userRef: data[docId]['userRef']
          });
        }
      }
    });
    this.db.database.ref('users').on('value', data => {
      data = data.val();
      for (const docId in data) {
        if (data.hasOwnProperty(docId)) {
          this.users.push({
            id: docId,
            firebaseUser: null,
            role: data[docId]['role']
          })
        }
      }
    });
  }
  public get LoanedItems(): LoanedItem[] {
    const itemsOnLoan: LoanedItem[] = [];
    console.log(this.requests);
    console.log(this.requests[0])
    this.requests.forEach(element => {
      if (this.parseDate(element.endDate) > new Date()) {
        const item = new LoanedItem();
        item.endDate = element.endDate;
        item.startDate = element.startDate;
        item.name = this.findItemWithId(element.itemRef).id;
        item.nameOfLoaner = this.findUserWithId(element.userRef).id;
      }
    });
    return itemsOnLoan;
  }
  private findUserWithId(id: any): AppUser {
    this.users.forEach(element => {
      if (id === element.id) {
        return element;
      }
    });
    return null;
  }
  private findItemWithId(id: any): Item {
    this.items.forEach(element => {
      if (id === element.id) {
        return element;
      }
    });
    return null;
  }
  private parseDate(date: string): Date {
    // try {
      const parts = '2014-04-03'.split('-');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      // January = 0, Febuary = 1....
      const mydate = new Date(day, month - 1, year);
      return mydate;
    // } catch {
    //   throw new Error('could not parse date:' + date);
    // }
  }
}
