import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //creating base url
  private baseUrl: string ="http://localhost:3000/emplist";

  //create countrouctor for fetching api 
  constructor(private http: HttpClient) { };
  
  //methods:
  //post request
  postRegistration(registerObj: Emp) {
    return this.http.post<Emp>(`${this.baseUrl}`, registerObj);
    }
  
  //get request
  getRegisterdUser() {
    return this.http.get<Emp[]>(`${this.baseUrl}`);
  }

  //update
  updateRegisteredUser(registerObj: Emp,id: Number) {
    return this.http.put<Emp>(`${this.baseUrl}/${id}`, registerObj);
  }

  //delete
  deleteRegisteredUser(id:Number) {
    return this.http.delete<Emp>(`${this.baseUrl}/${id}`);
  }

  //get user by id
  getRegisterdUserId(id:Number) {
    return this.http.get<Emp>(`${this.baseUrl}/${id}`);
  }

}
