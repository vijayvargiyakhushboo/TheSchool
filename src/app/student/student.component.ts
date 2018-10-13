import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	studentData: any = {};

  constructor(public rest:RestService) { 
  }

  ngOnInit() {
  }
  submitStudent(studentData) {
  	var obj= [];
  	obj.push(studentData);
  	let keys = Object.keys(studentData);
	let values = Object.values(studentData);
  	var studentObj = {"fn": "insert","params": ["students",keys,values]};
   	this.rest.postStudent(studentObj).subscribe((response) => {
  	});
  }

}
