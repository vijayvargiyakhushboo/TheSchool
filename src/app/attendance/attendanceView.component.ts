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
	presentAction=0;
	absentAction=0;
	leaveAction=0;
constructor(private rest:RestService,private datePipe:DatePipe){};
public getClassName(id): void {
this.classId = id;  
console.log("getClassName:"+this.todayDate);this.dataSource='';
    let classObj = { "fn": "selectAttendance","params": ["attendance","students",[this.classId],[this.todayDate] ]};
    this.rest.getAttendanceByClass(classObj).subscribe((response) => {
		 this.dataSource = response;
		 console.log("res: ",response);
		 for(let i=0; i<(response).length; i++){
		 	if(response[i].action== 'A'){
		 		this.absentAction += parseInt(1);
		 	}else if(response[i].action== 'L'){
		 		this.leaveAction += parseInt(1);
		 	}else {
		 		this.presentAction += parseInt(1);
		 	}
		 	
		 }
		 console.log(this.absentAction );
		 	console.log(this.leaveAction );
		 	console.log(this.presentAction );
    	 /*for(let i=0; i<((this.studentData).length ); i++){
           this.studentData[i].action = 'present';
		 }*/
	});
}
public getSearchDate(searchDate): void {
	//console.log(this.datePipe.transform(searchDate, 'yyyy-MM-dd'));
	this.todayDate = this.datePipe.transform(searchDate, 'yyyy-MM-dd');
	console.log("getSearchDate:"+this.todayDate);
	this.getClassName(this.classId);

}

}