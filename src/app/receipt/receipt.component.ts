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
  		}),
      'tution_fee' : new FormControl('',{
        
      }),
      'acti_fee' : new FormControl('',{
        
      }),     
      'late_fee' : new FormControl('',{
        
      }),      
      'sclass' : new FormControl('',{
        
      }),
      'exam_fee' : new FormControl('',{
        
      }),
      'annual_func_fee' : new FormControl('',{
        
      }),
      
      'music_fee' : new FormControl('',{
        
      }),
      
      'lab_fee' : new FormControl('',{
        
      }),
      
      'lib_fee' : new FormControl('',{
        
      }),

      'elec_fee' : new FormControl('',{
        
      }),
      'dev_fee' : new FormControl('',{
        
      }),
      
      'form_chrgs' : new FormControl('',{
        
      }),
      'pre_bal' : new FormControl('',{
        
      }),

  	})
  }

  saveStudentFee(){
    // this.form.get('tution_fee').clearValidators();

  	let keys = Object.keys(this.form.controls);
  	let values = Object.values(this.form.value);
  	console.log("keys: ",keys);
  	console.log("values: ",values);
  }

}
