import { Component, OnInit,OnChanges } from '@angular/core';
import { RestService } from '../rest.service';
import { CLASSES } from '../class';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceViewComponent {
    classData = CLASSES;
	classId;
	dataSource;
	displayedColumns = ['roll_number','first_name','last_name','action'];
	todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
constructor(private rest:RestService,private datePipe:DatePipe){};
public getClassName(id): void {
this.classId = id;  
    let classObj = { "fn": "selectAttendance","params": ["attendance","students",[this.classId],[this.todayDate] ]};
    this.rest.getAttendanceByClass(classObj).subscribe((response) => {
		 this.dataSource = response;
		 console.log("res: ",response);
    	 /*for(let i=0; i<((this.studentData).length ); i++){
           this.studentData[i].action = 'present';
		 }*/
	});
}

}