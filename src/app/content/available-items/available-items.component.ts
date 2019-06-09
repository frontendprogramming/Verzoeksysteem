import { Component, OnInit, Input, Inject } from '@angular/core';
import { AvailableItem } from 'src/app/models/available-item.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AuthorizationService } from '../../service/authorization.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { RequestStatus } from 'src/app/models/request-status.model';
import { ItemsService } from 'src/app/service/item.service';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./dialog.scss']
})
export class DialogComponent {

  public today: any = new FormControl(new Date());
  public startDate: any = new FormControl(new Date());
  public endDate: any = new FormControl(new Date());
  public maxDate: any = new FormControl(new Date());


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public authService: AuthorizationService,
    @Inject(MAT_DIALOG_DATA) public data: AvailableItem) {
    this.startDate.controls = this.authService.currentUser.role === 'student';
  }

  cancel(): void {
    this.dialogRef.close();
  }

  OnInit() {
    this.endDate.setDate(this.endDate.getDate() + 7);
    this.maxDate.setDate(this.maxDate.getDate() + 31);
  }
}

@Component({
  selector: 'app-available-items',
  templateUrl: './available-items.component.html',
  styleUrls: ['./available-items.component.scss']
})
export class AvailableItemsComponent implements OnInit {
  @Input() availableItem: AvailableItem;

  constructor(
    public dialog: MatDialog,
    private db: AngularFireDatabase,
    public authService: AuthorizationService,
    public itemService: ItemsService) { }

  public formatDate(date: any): string {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + '-' + (monthIndex + 1) + '-' + year;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { item: this.availableItem }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.database.ref(`items/${result[0].id}`).update({
          status: RequestStatus.waitingForApproval,
          startDate: this.formatDate(result[1].value),
          endDate: this.formatDate(result[2].value),
          nameOfLoaner: this.authService.currentUser.name,
          userRef: this.authService.currentUser.firebaseUser.uid,
        }, callback => {
          this.itemService.refreshItems();
        });
      }
    });
  }



  ngOnInit() {
  }

}



