import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DialogConfirmComponent } from './dialogConfirm/dialogConfirm.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import {DialogItemComponent} from './dialogItem/dialogItem.component';
import {DialogCategoryComponent} from './dialogCategory/dialogCategory.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MatDialogRef<DialogConfirmComponent>;

    dialogRef = this.dialog.open(DialogConfirmComponent);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  public item(item): Observable<boolean> {

    let dialogRef: MatDialogRef<DialogItemComponent>;

    dialogRef = this.dialog.open(DialogItemComponent,
      { height: '70%', width: '70%'});


    dialogRef.componentInstance.item = item;

    return dialogRef.afterClosed();
  }

  public category(category): Observable<boolean> {

    let dialogRef: MatDialogRef<DialogCategoryComponent>;

    dialogRef = this.dialog.open(DialogCategoryComponent,
      { height: '70%', width: '70%'});

    dialogRef.componentInstance.category = category;

    return dialogRef.afterClosed();
  }
}
