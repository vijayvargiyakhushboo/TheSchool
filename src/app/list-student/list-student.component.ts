import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
studentList;
dataSource = new MatTableDataSource();
displayedColumns = ['first_name','father_name','mother_name','class','dob'];

  constructor( public rest: RestService) {
    
  var student = {
  "fn":"selectAll",
  "params":["students"]
  }
this.rest.getStudents().subscribe((response) => {
    console.log("res KV: ",response);
    this.dataSource = new MatTableDataSource(this.studentList);

    this.studentList = response;
     console.log("res KV2: ",this.studentList);
});
 }

  ngOnInit() {
  }

  //createContact(){



//};

}
