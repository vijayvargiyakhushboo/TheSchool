/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }
}
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { FirebaseWrapper } from './firebasewrapper';
let firewrap = new FirebaseWrapper();
//import firebase from "firebase";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Authorization': 'did' })
};

@Injectable({ providedIn: 'root'})

export class RestService {
 API_URL  =  'http://localhost:5001/sql';
constructor(private  httpClient:  HttpClient)
 {}
	getStudents(){
		 //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAll('students');
	    //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
	}
  getBooks(){
		 //const body = JSON.stringify({"fn": 'selectAll', "params": ["books"]});
	    return firewrap.selectAll('books');
	}

  postStudent(student) {
    return firewrap.addStudent(student);
    //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
  }
  postReceipt(receiptDate) {
    console.log("rest postReceipt");
    return firewrap.addReceipt(receiptDate);
    //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
  }
  getReceipt(){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAll('receipt');
      //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
  }
  getReceiptById(id){
    return firewrap.selectAllById('receipt',id);
  }
  update(tableName,id,data){
    return firewrap.update(tableName,id,data);
  }
  delete(tableName,id){
    return firewrap.delete(tableName,id);
  }
  getStudentsById(id){
      return firewrap.selectAllById('students',id);
  }
  postBook(bookData) {
    return this.httpClient.post(`${this.API_URL}`,bookData, httpOptions)
  }
  getClasses(){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["class"]});
      return firewrap.selectAll('class');
  }
  getRollNumber(classId){
      return  this.httpClient.post(`${this.API_URL}`,classId, httpOptions)
  }
  
  postEditStudent(editStudentData){
      return this.httpClient.post(`${this.API_URL}`,editStudentData,httpOptions)
  }
  postLogin(body){
    return firewrap.login(body);
  }
  postAttendance(body){
    return this.httpClient.post(`${this.API_URL}`,body,httpOptions)
  }
  deleteRowAttendance(body){
    return this.httpClient.post(`${this.API_URL}`,body,httpOptions)
  }
  getAttendanceByClass(body){
    return this.httpClient.post(`${this.API_URL}`,body,httpOptions)
  }
};
