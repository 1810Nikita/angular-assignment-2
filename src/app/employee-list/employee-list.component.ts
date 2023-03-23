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


  ondelete(index: number, name: string) {
    if (confirm("Are you sure you want to delete " + name + "?")) {
      this.api.deleteRegisteredUser(index).subscribe(() => {
        const message = `The Employee ${name} is deleted successfully.`;
        //alert(message);
        this.getRegisterdUser();
        this.showMessage(message, 2000);
      });
    }
  }
  
  showMessage(message: string, duration: number) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    document.body.appendChild(messageElement);
    setTimeout(() => {
      messageElement.remove();
    }, duration);
  }
  
      


    
  }







