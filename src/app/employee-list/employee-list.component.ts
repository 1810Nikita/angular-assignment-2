import {  Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Emp } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employee!: Emp[];
  id!:number;

  //constructor
  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void{
    this.getRegisterdUser()
  }

  //getting the data 
  getRegisterdUser() {
    this.api.getRegisterdUser().subscribe(data =>{
      this.employee = data
    })
  }

  //edit button will route to form
  edit(index:Number){
    this.router.navigate(['update', index])

  }


  ondelete(id:Number){
    this.api.deleteRegisteredUser(id).subscribe((res) =>{
      this.getRegisterdUser()
      
    })
  }
      


    
  }







