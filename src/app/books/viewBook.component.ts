import { Component, OnInit,Inject } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './viewBook.component.html',
  styleUrls: ['./book.component.css']
})
export class ListBookComponent implements OnInit {
bookList;
dataSource ;
displayedColumns = ['id','book_title','author_name','publication','course_book'];

  constructor( public rest: RestService) {

  var books = {
  "fn":"selectAll",
  "params":["books"]
  }
this.rest.getBooks().subscribe((response) => {
    this.dataSource = response ;
    this.bookList = response;
});
 }
  ngOnInit() {
  }

}
