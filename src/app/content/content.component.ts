import {Component } from '@angular/core';
import {HttpService} from '../http.servise';
import {IResult} from '../IResult';
import {Router} from '@angular/router';
import {DialogsService} from '../dialogs/dialogs.service';


@Component({
  selector: 'content',
  templateUrl: './content.html',
  styleUrls: ['./content.css'],

})
export class ContentComponent {

   response: IResult[];
   result: boolean;

  constructor(private http: HttpService, private router: Router,private dialogsService: DialogsService) {
    this.search('');
  }

  search(url) {
    this.http.getData('http://jsworkshop.000webhostapp.com/?model=product').subscribe(
      data => {
        this.response = data;
        console.log('asasadasdsa', this.response);
        console.log(data.length);

      }
    );




  }
  clickItem(item) {
    console.log('adads');
    this.dialogsService
      .item(item)
      .subscribe(res => this.result = res);
  }

}
