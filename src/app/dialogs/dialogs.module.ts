import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmComponent } from './dialogConfirm/dialogConfirm.component';
import { DialogsService } from './dialogs.service';
import {MatButtonModule, MatDialogModule, MatSelectModule} from '@angular/material';
import {DialogItemComponent} from './dialogItem/dialogItem.component';
import {MatTabsModule} from '@angular/material';
import {DialogCategoryComponent} from './dialogCategory/dialogCategory.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
  ],
  declarations: [
    DialogConfirmComponent,
    DialogItemComponent,
    DialogCategoryComponent,
  ],
  exports: [
    DialogConfirmComponent,
    DialogItemComponent,
    MatTabsModule,
    MatSelectModule,
  ],
  entryComponents: [
    DialogConfirmComponent,
    DialogItemComponent,
    DialogCategoryComponent,
  ],
  providers: [DialogsService]
})
export class DialogsModule { }
