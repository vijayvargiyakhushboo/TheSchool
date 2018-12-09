import { Component, OnChanges } from '@angular/core';
import { CLASSES } from '../class';
import { FormControl,NgForm,Validators } from '@angular/forms';

@Component({
	selector:'app-attendance',
	templateUrl:'./attendance.component.html',
	 styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnChanges {

classData = CLASSES;
displayedColumns = ['roll_number','first_name','last_name','present','absent','leave'];
constructor(){
 console.log("class:",this.classData);	
}

getClassName(events) {  // event will give you full breif of action
    console.log("sdfjl: ",events);
}

getDate(date){
  	console.log("date:",date);
}

}