import { Component, OnInit,Inject } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-list-receipt',
  templateUrl: './list-receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ListReceiptComponent implements OnInit {
	dataSource ;
displayedColumns = ['session','class','student_name','father_name','mother_name','total_amount','amt_deposite','pre_bal','bal_amount','annual_func_fee','dearness_fee','dev_fee','elec_fee','exam_fee','form_chrgs','lab_fee','lib_fee','monthName','music_fee','received_by','remark','sclass','searchDate','uId'];
constructor(public rest:RestService){
this.rest.getReceipt().then((response) => {
    console.log("res KV: ",response);
    this.dataSource = response ;
   
    console.log("dataSource receipt :",this.dataSource);
});
}
ngOnInit() {
  }
}

