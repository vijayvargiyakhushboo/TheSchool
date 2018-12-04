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
		 const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
	    return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
	}
  getBooks(){
		 const body = JSON.stringify({"fn": 'selectAll', "params": ["books"]});
	    return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
	}

  postStudent(studentData) {
    return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
  }
  postBook(bookData) {
    return this.httpClient.post(`${this.API_URL}`,bookData, httpOptions)
  }
  getClasses(){
     const body = JSON.stringify({"fn": 'selectAll', "params": ["class"]});
      return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
  }
  getRollNumber(classId){
      return  this.httpClient.post(`${this.API_URL}`,classId, httpOptions)
  }
  getStudentsById(body){
      return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
  }
  postEditStudent(editStudentData){
      return this.httpClient.post(`${this.API_URL}`,editStudentData,httpOptions)
  }
  postLogin(body){
    return this.httpClient.post(`${this.API_URL}`,body,httpOptions)
  }
};
