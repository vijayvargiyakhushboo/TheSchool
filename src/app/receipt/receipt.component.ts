import { Component, OnInit, Inject } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,NgForm,Validators } from '@angular/forms';
import { CLASSES } from '../class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
    studentData: any = {};
	classData = CLASSES ;
  constructor() { }

  ngOnInit() {
  }

}
