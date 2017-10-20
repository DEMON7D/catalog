import {Component} from '@angular/core';
import {ICategory} from '../ICategory';
import {HttpService} from '../http.servise';
import {DialogsService} from '../dialogs/dialogs.service';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

 public  category: ICategory[];

  constructor(private http: HttpService, private dialogsService: DialogsService ) {
    this.searchCategory('http://jsworkshop.000webhostapp.com/?model=category');
  }

  searchCategory(url) {
    this.http.getCategory(url).subscribe(
      data => {
        this.category = data;
        console.log(data);
        this.categoryView();
      }
    );
  }

  categoryView() {
    this.dialogsService
      .category(this.category)
      .subscribe(res => console.log(res));
  }
}
