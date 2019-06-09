import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatCardModule,
  MatMenuModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
})

export class MaterialModule { }
