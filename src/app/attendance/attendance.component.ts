import { Component, OnInit,OnChanges } from '@angular/core';
import { CLASSES } from '../class';
import { FormControl,NgForm,Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {

classData = CLASSES;
classId;
studentData: any = [];

constructor(public rest:RestService){
 console.log("class:",this.classData);	
};

public getClassName(id): void {  
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

submitAttendance(form:NgForm){
	console.log("att form: ",form);
	 let keys = Object.keys(form.controls);
    let values = Object.values(form.value);
    console.log("keys: ",keys);
    console.log("values: ",values);
}

onRadioClick(index,val) {
    this.studentData[index].action = val;
  }
}