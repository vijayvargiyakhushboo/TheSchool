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
  	let keys = Object.keys(form.controls);
    let values = Object.values(form.value);
  	console.log("keys: ",keys);
  	console.log("values: ",values);
  }

  getDepositeAmt(formData){
   console.log("val:",formData);
   console.log(formData.controls.pre_bal.value);
   console.log(formData.controls.form_chrgs.value);
     if(formData.controls.pre_bal.value == ''){
       formData.controls.pre_bal.value =0;
     }
     if(formData.controls.form_chrgs.value == ''){
       formData.controls.form_chrgs.value = 0;
     }
     if(formData.controls.adm_fee.value == ''){
       formData.controls.adm_fee.value = 0;
     }
     if(formData.controls.dearness_fee.value == ''){
       formData.controls.dearness_fee.value = 0;
     }
    if(formData.controls.dev_fee.value == ''){
       formData.controls.dev_fee.value = 0;
     }
     if(formData.controls.elec_fee.value == ''){
       formData.controls.elec_fee.value = 0;
     }
     if(formData.controls.lib_fee.value == ''){
       formData.controls.lib_fee.value = 0;
     }
     if(formData.controls.lab_fee.value == ''){
       formData.controls.lab_fee.value = 0;
     }
     if(formData.controls.music_fee.value == ''){
       formData.controls.music_fee.value = 0;
     }
     if(formData.controls.annual_func_fee.value == ''){
       formData.controls.annual_func_fee.value = 0;
     }
     if(formData.controls.exam_fee.value == ''){
       formData.controls.exam_fee.value = 0;
     }
     if(formData.controls.sclass.value == ''){
       formData.controls.sclass.value = 0;
     }
     if(formData.controls.tution_fee.value == ''){
       formData.controls.tution_fee.value = 0;
     }

     if(formData.controls.acti_fee.value == ''){
       formData.controls.acti_fee.value = 0;
     }
     if(formData.controls.late_fee.value == ''){
       formData.controls.late_fee.value = 0;
     }
      let depositeAmt = +(formData.controls.pre_bal.value ) + (formData.controls.form_chrgs.value) + (formData.controls.adm_fee.value) + (formData.controls.dearness_fee.value)  + (formData.controls.dev_fee.value)
     + (formData.controls.elec_fee.value) + (formData.controls.lib_fee.value) + (formData.controls.lab_fee.value) + (formData.controls.music_fee.value) 
     + (formData.controls.annual_func_fee.value) + (formData.controls.exam_fee.value) + (formData.controls.sclass.value) + (formData.controls.tution_fee.value)  + (formData.controls.acti_fee.value)  + (formData.controls.late_fee.value);
     this.sum = depositeAmt;
  }

}
