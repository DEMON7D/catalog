import { Component } from '@angular/core';
import {DialogsService} from './dialogs/dialogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result: any;

  constructor(private dialogsService: DialogsService) { }

  public openDialog() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }
}
