import { Component, OnInit,OnChanges } from '@angular/core';
import { CLASSES } from '../class';
import { FormControl,NgForm,Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {

classData = CLASSES;
classId;
studentData: any = [];
attendanceObj;

constructor(public rest:RestService,public router:Router){
 console.log("class:",this.classData);	
};

public getClassName(id): void {
this.classId = id;  
    let classObj = {"fn": "selectAllById","params": ["students",['class'],[id] ]};
    this.rest.getStudentsById(classObj).subscribe((response) => {
		 this.studentData = response;
    	 for(let i=0; i<((this.studentData).length ); i++){
           this.studentData[i].action = 'present';
		 }
	});
}

public getDate(date): void {
	console.log("date:",date);
}

/*submitAttendance(form:NgForm){
		console.log("att form: ",form);
		let keys = Object.keys(form.controls);
		let values = Object.values(form.value);
		console.log("keys: ",keys);
		console.log("values: ",values);
		keys.push('date');
		values.push(new Date());
		keys.push('class');
		values.push(this.classId);
		console.log("keys: ",keys);
		console.log("values: ",values);
		var key = keys.keys()[0]; console.log("key:",key);
		this.attendanceObj = {"fn": "insert","params": ["attendance",keys,values]};
		console.log("attendanceObj: ",this.attendanceObj);
   	     	this.rest.postAttendance(this.attendanceObj).subscribe((response) => {
   		    alert("attendance added.")
           this.router.navigate(['/liststudent']);
  	  });
}*/

onRadioClick(index,val,student) {
    this.studentData[index].action = val;
    console.log("student:",student);
    let keys = ['date','class','roll_number','action'];
    let values = [new Date(),student.class,student.roll_number,student.action];
    this.attendanceObj = {"fn": "insert","params": ["attendance",keys,values]};
	this.rest.postAttendance(this.attendanceObj).subscribe((response) => {
		//alert("attendance added.")
		//this.router.navigate(['/liststudent']);
		});
    }
}