import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,NgForm,Validators } from '@angular/forms';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BooksComponent implements OnInit {
	bookData: any = {};

  constructor(public rest:RestService) {
  	/*this.rest.getClasses().subscribe((response) => {
    console.log("res KV class: ",response);
    this.classData = response;
    });*/
  }

  ngOnInit() {
  }

  submitBook(form: NgForm) {
  	if(form.invalid){
  		return;
  	}
  let keys = Object.keys(form.form.controls);
	let values = Object.values(form.value);
  console.log("key & values",keys,values);
	var bookObj = {"fn": "insert","params": ["books",keys,values]};
   	   	this.rest.postBook(bookObj).subscribe((response) => {
   		alert("Book Added.");
      });
    }
}
