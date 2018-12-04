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

  ngOnInit() {
  }
getLoggedIn(form:NgForm){
	let value = Object.values(form.value);
  	let  loginObj = { "fn": "selectLoginInfo","params": ["login", value[0], value[1]] };
  	this.api.postLogin(loginObj).subscribe((response)=>{
	console.log("response: ",response[0]);
	//console.log("response: "+response[0].id);

	if(response[0].user_email == value[0] && response[0].password == value[1] ){
		alert("success login");
		this.router.navigateByUrl('/liststudent');
	}else{
		console.log("login failed");
	    //this.router.navigate(['./login']);
	}
	});
}
}
