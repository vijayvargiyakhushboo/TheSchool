import { Component, OnInit, Inject } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,NgForm,Validators } from '@angular/forms';
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
	todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  constructor(public datePipe : DatePipe) { 
  	console.log("date: "+(new Date()) );
  }

  ngOnInit() {
  }

}
