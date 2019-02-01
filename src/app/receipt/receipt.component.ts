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

	todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  form: FormGroup;
  constructor(public datePipe : DatePipe) { 
  	console.log("date: "+(new Date()) );
    }

  ngOnInit() {
  }

  saveStudentFee(form: NgForm){
    if(form.invalid){
    return;
    }
let deposit_amt = +(form.controls.pre_bal.value ) + (form.controls.form_chrgs.value) + (form.controls.adm_fee.value) + (form.controls.dearness_fee.value)
 + (form.controls.elec_fee.value) + (form.controls.lib_fee.value) + (form.controls.lab_fee.value) + (form.controls.music_fee.value) 
 + (form.controls.annual_func_fee.value) + (form.controls.exam_fee.value) + (form.controls.sclass.value) + (form.controls.tution_fee.value)  + (form.controls.acti_fee.value)  + (form.controls.late_fee.value)  ;
  	let keys = Object.keys(form.controls);
    form.value.amt_deposite= deposit_amt;
    let values = Object.values(form.value);
  	console.log("keys: ",keys);
  	console.log("values: ",values);
  }

}
