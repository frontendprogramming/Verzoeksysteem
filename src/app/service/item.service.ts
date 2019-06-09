import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RequestStatus } from '../models/request-status.model';
import { AuthorizationService } from './authorization.service';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public loanedItems: Item[] = [];
  public waitingRequests: Item[] = [];
  public allLoanedItems: Item[] = [];
  public myRequests: Item[] = [];
  public availiableItems: Item[] = [];

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthorizationService
  ) {
    this.refreshItems();
  }

  public refreshItems() {
    this.loanedItems = [];
    this.waitingRequests = [];
    this.allLoanedItems = [];
    this.availiableItems = [];

    this.db.database.ref('items').once('value').then(data => {
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
          if (data[docId]['status'] === RequestStatus.Available || data[docId]['status'] === RequestStatus.Reserved) {
            this.availiableItems.push(data[docId]);
          }
          if (data[docId]['userRef'] === this.authService.currentUser.firebaseUser.uid && data[docId]['status'] !== 'Available') {
            this.myRequests.push(data[docId])
          }
          this.allLoanedItems.push(data[docId]);
        }
      }
    });
  }
  // addrequestForTesting() {
  //   for (let i = 3; i < 10; i++) {
  //     const randomProductId = this.getRandomInt(1, 4);
  //     const users = ['8hmi01Za7gTK8Px7loeTNDGEwOq1',
  //       'Pijf5SKZcXSC6vJ1vIvcCNCFo1M2',
  //       'wYD45g3mlDQo1Q17PdR8yEMAIxH3']
  //     const randomUserIndex = this.getRandomInt(0, 3);
  //     const randomDate1 = this.randomDate(new Date(2012, 1, 1), new Date());
  //     const randomDate2 = this.randomDate(new Date(2012, 1, 1), new Date());
  //     this.db.database.ref(`items/${randomProductId}`).once('value').then(data => {
  //       const generatedObject = {
  //         desc: 'bla bla bla bla bla',
  //         endDate: randomDate1 > randomDate2 ? randomDate1 : randomDate2,
  //         itemRef: randomProductId,
  //         name: data.val()['name'],
  //         nameOfLoaner: this.authService.currentUser.firebaseUser.email,
  //         startDate: randomDate1 > randomDate2 ? randomDate2 : randomDate1,
  //         status: RequestStatus.waitingForApproval,
  //         userRef: users[randomUserIndex]
  //       };

  //       this.db.database.ref(`loaned-items/${i}`).set(generatedObject).then(data => {
  //         console.log('added Object with id ', i);
  //       });
  //     });
  //   }
  // }
  // getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
  // randomDate(start, end) {
  //   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10);
  // }

}
