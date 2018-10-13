import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,NgForm,Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	studentData: any = {};
	classData;

  constructor(public rest:RestService) { 
  	this.rest.getClasses().subscribe((response) => {
    console.log("res KV class: ",response);
    this.classData = response;
    });
  }

  ngOnInit() {
  }
  submitStudent(form: NgForm) {
  	if(form.invalid){
  		return;
  	}
  	let keys = Object.keys(form.form.controls);
	let values = Object.values(form.value);

  	var studentObj = {"fn": "insert","params": ["students",keys,values]};
   	this.rest.postStudent(studentObj).subscribe((response) => {
   		console.log("Success response: ",response);
   		alert("Student added.");
  	});
  }

}
