import { Component, OnInit, Input, Inject } from '@angular/core';
import { AvailableItem } from 'src/app/models/available-item.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AuthorizationService } from '../../service/authorization.service';

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

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { item: this.availableItem }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit() {
  }

}



