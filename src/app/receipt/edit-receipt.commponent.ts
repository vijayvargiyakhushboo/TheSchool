import { Component, OnInit,Inject } from '@angular/core';
import { RestService } from '../rest.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router,ActivatedRoute } from '@angular/router';


export interface DialogData {
  studentId;
}

@Component({
  selector: 'edit-receipt',
  templateUrl: './edit-receipt.commponent.html',
  styleUrls: ['./receipt.component.css']
})
export class EditReceiptComponent implements OnInit {
studentList;
dataSource ;
private sub : any;
displayedColumns = ['roll_number','first_name','father_name','mother_name','class','dob','uId'];

  constructor( public rest: RestService, public dialog: MatDialog,public route : ActivatedRoute) {
  }
  ngOnInit(){
  	this.sub = this.route.params.subscribe(params => {
  	console.log("std id: "+[params['id']]);

  });
}
}