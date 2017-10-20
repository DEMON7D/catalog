import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {ICategory} from '../../ICategory';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './dialogCategory.html',
  styleUrls: ['./dialogCategory.css']
})
export class DialogCategoryComponent {

  public category: ICategory;

  constructor(public dialogRef: MatDialogRef<DialogCategoryComponent>) {

  }
}
