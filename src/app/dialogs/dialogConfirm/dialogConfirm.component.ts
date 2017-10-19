import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './DialogConfirm.html',
  styleUrls: ['./DialogConfirm.css']
})
export class DialogConfirmComponent {


  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<DialogConfirmComponent>) {

  }
}
