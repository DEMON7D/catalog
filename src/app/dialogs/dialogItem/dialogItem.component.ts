import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {IResult} from '../../IResult';
import {ICategory} from '../../ICategory';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './dialogItem.html',
  styleUrls: ['./dialogItem.css']
})
export class DialogItemComponent {

  public item: IResult;

  constructor(public dialogRef: MatDialogRef<DialogItemComponent>) {
  }
}
