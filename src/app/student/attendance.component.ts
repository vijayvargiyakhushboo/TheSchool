import { Component, OnChanges } from '@angular/core';
import { CLASSES } from '../class';
import { FormControl,NgForm,Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
	selector:'app-attendance',
	templateUrl:'./attendance.component.html',
	 styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnChanges {

classData = CLASSES;
displayedColumns = ['roll_number','first_name','last_name','present','absent','leave'];
classId;
studentData;

constructor(public rest:RestService){
 console.log("class:",this.classData);	
};

public getClassName(id): void {  
    console.log("class id: "+id);
    let classObj = {"fn": "selectAllById","params": ["students",['class'],[id]] };
    this.rest.getStudentsById(classObj).subscribe((response) => {
		 console.log("res KV: ",response);
		 this.studentData = response;
	});
}

public getDate(date): void {
	console.log("date:",date);
}

submitAttendance(form:NgForm){
	console.log("att form: ",form);
}
}