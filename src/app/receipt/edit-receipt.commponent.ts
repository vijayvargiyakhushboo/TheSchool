import { Component, OnInit,Inject } from '@angular/core';
import { RestService } from '../rest.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl,Validators,FormGroup ,NgForm} from '@angular/forms';


export interface DialogData {
  studentId;
}

@Component({
  selector: 'edit-receipt',
  templateUrl: './edit-receipt.commponent.html',
  styleUrls: ['./receipt.component.css']
})
export class EditReceiptComponent implements OnInit {
editReceiptData ;
edirReceiptId;
sum:number =0;
private sub : any;
displayedColumns = ['roll_number','first_name','father_name','mother_name','class','dob','uId'];

  constructor( public rest: RestService, public dialog: MatDialog,public route : ActivatedRoute) {
  }
  ngOnInit(){
  	this.sub = this.route.params.subscribe(params => {
  	console.log("std id: "+[params['id']]);
  	this.edirReceiptId = params['id'];
		this.rest.getReceiptById(params['id']).then((response) => {
		console.log("res KV: ",response);
		this.editReceiptData = response ;
		console.log("editReceiptData receipt :",this.editReceiptData);
		});
  });
}

updateStudentFee(form: NgForm){
	if(form.invalid){
		return;
	}
	console.log("update form: ",form);
	console.log("id: "+this.edirReceiptId);
	if(this.sum > 0){
		form.controls.amt_deposite.value = this.sum;
	}
	console.log("update form2: ",form);
	this.rest.update('receipt',this.edirReceiptId,form.value).then((response) => {
       alert("Receipt added. !!");
    });
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
     formData.controls.amt_deposite.value = this.sum;
     console.log("sum:: "+this.sum);
  }

}