import { Component, OnInit, Inject, Input } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,Validators,FormGroup ,NgForm} from '@angular/forms';
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
  sum;

	//form : FormGroup;
	todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

   

  form: FormGroup;
  constructor(public datePipe : DatePipe) { 
  	console.log("date: "+(new Date()) );
   
    
   
    


  }

  ngOnInit() {
  	
     
      
  }

  saveStudentFee(form: NgForm){
    // this.form.get('tution_fee').clearValidators();
    if(form.invalid){
    return;
    }

  	let keys = Object.keys(form.controls);
  	let values = Object.values(form.value);
  	console.log("keys: ",keys);
  	console.log("values: ",values);
  }

}
