import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private api:RestService) { }

  ngOnInit() { }

  getLoggedIn(form:NgForm){
  	if(form.invalid){
  		return;
  	}

    this.api.postLogin(form.value).then((response)=>{
  	     console.log("response: ",response);
         this.router.navigateByUrl('/home');
  	});
  }
}
