import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmComponent } from './dialogConfirm/dialogConfirm.component';
import { DialogsService } from './dialogs.service';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import {DialogItemComponent} from './dilogItem/dialogItem.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [
    DialogConfirmComponent,
    DialogItemComponent
  ],
  exports: [
    DialogConfirmComponent,
    DialogItemComponent,
  ],
  entryComponents: [
    DialogConfirmComponent,
    DialogItemComponent,
  ],
  providers: [DialogsService]
})
export class DialogsModule { }
