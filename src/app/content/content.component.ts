import {Component, Input} from '@angular/core';
import {HttpService} from '../http.servise';
import {IResult} from '../IResult';
import {Router} from '@angular/router';
import {DialogsService} from '../dialogs/dialogs.service';
import {ICategory} from '../ICategory';


@Component({
  selector: 'content',
  templateUrl: './content.html',
  styleUrls: ['./content.css'],

})
export class ContentComponent {

  @Input() category: ICategory[];

   response: IResult[];
   result: boolean;
   items: IResult[];
   numItems: number;

  constructor(private http: HttpService, private router: Router, private dialogsService: DialogsService) {
    this.search('http://jsworkshop.000webhostapp.com/?model=product');
  }

  search(url) {
    this.http.getData(url).subscribe(
      data => {
        this.response = data;
        this.numItems = 20;
        this.items = this.response.slice(1, this.numItems);
      }
    );
  }
  clickItem(item) {
    this.dialogsService
      .item(item)
      .subscribe(res => this.result = res);
  }

  load() {
    console.log(this.category);
    this.numItems += 20;
    this.items = this.response.slice(1, this.numItems);
  }
  isOf() {
     if ( !this.response) return true;
    console.log(this.numItems, this.response.length);
     if ( this.numItems >= this.response.length) return true;
     return false;
  }

}
