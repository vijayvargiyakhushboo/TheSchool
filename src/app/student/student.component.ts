import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,NgForm,Validators } from '@angular/forms';
import { CLASSES } from '../class';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	studentData: any = {};
	classData = CLASSES ;

  constructor(public rest:RestService) { 
  	/*this.rest.getClasses().subscribe((response) => {
    console.log("res KV class: ",response);
    this.classData = response;
    });*/
  }

  ngOnInit() {
  }

  submitStudent(form: NgForm) {
  	if(form.invalid){
  		return;
  	}
  	let keys = Object.keys(form.form.controls);
  	form.value.dob = (form.value.dob).toString();
	let values = Object.values(form.value);
	let classValue = Object.values(form.value.class) ;
	var studentObj;
	keys.push('roll_number');
	let rollNumberObj = {"fn": "selectMaxRollNumber","params":["students","class",classValue ]};
		this.rest.getRollNumber(rollNumberObj).subscribe((response) => {
   		if(response[0]['roll_number'] == null || response[0]['roll_number'] == 'undefined'){
         values.push(1);
   		}else{
   			values.push(response[0]['roll_number']);
   		}
   	   studentObj = {"fn": "insert","params": ["students",keys,values]};
   	   	this.rest.postStudent(studentObj).subscribe((response) => {
   		alert("Student added.");
  	});
  	});
}

}
