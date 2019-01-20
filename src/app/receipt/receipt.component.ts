import { Component, OnInit, Inject } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { CLASSES } from '../class';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
    studentData: any = {};
	classData = CLASSES ;
	form : FormGroup;
	todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  constructor(public datePipe : DatePipe) { 
  	console.log("date: "+(new Date()) );
  }

  ngOnInit() {
  	this.form = new FormGroup({
  		'session' : new FormControl('',{
  			validators:[Validators.required]
  		}),
  		'student_name' : new FormControl('',{
  			validators:[Validators.required]
  		}),
  		'mother_name' : new FormControl('',{
  			validators:[Validators.required]
  		}),
  		'father_name' : new FormControl('',{
  			validators:[Validators.required]
  		}),
  		'class' : new FormControl('',{
  			validators:[Validators.required]
  		}),
  		'adm_fee' : new FormControl('',{
  			validators:[Validators.required]
  		}),
  		'dearness_fee' : new FormControl('',{
  			validators:[Validators.required]
  		}),
  		'total_amount' : new FormControl('',{
  			validators:[Validators.required]
  		}),
  		'amt_deposite' : new FormControl('',{
  			validators:[Validators.required]
  		})
  	})
  }

  saveStudentFee(){
  	let keys = Object.keys(this.form.controls);
  	let values = Object.values(this.form.value);
  	console.log("keys: ",keys);
  	console.log("values: ",values);
  }

}
