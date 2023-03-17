import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { ApiService } from '../service/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Emp } from '../model/user.model';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  
  EmployeeForm: FormGroup;
  skills!: FormArray;

  public userIdtoUpdate!: Number;
   
  //using constrouctor for formBuilder, routing, fetching data to api
  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute, private api:ApiService, private router: Router) {
    
    
    //getting all the in employee form array
    this.EmployeeForm = this.fb.group({
      empid: '',
      name: '',
      contact: '',
      email: '',
      
      gender: '',
      skills: new FormArray([
        new FormGroup({
          skill: new FormControl(''),
          experience: new FormControl(''),
        }),
      ]),
      
    });

    this.skills = this.EmployeeForm.get('skills') as FormArray;   

    this.activatedRoute.params.subscribe(val=>{
      this.userIdtoUpdate = val['empid'];
      this.api.getRegisterdUser()
      .subscribe(res=>{

      })
    })
}



  //add skill button
  addSkill() {
    this.skills.push(
      new FormGroup({
        skill: new FormControl(''),
        experience: new FormControl(''),
      })
    );
  }
   
  //delete skill 
  deleteSkills(i:any){
    this.skills.removeAt(i);

  }

  
  //submit function to load data in api and also routing used to display emp-list
  onSubmit() {
    console.log(this.EmployeeForm.value);
    this.api.postRegistration(this.EmployeeForm.value)
    .subscribe( (res) =>{
      this.EmployeeForm.reset();
      this.router.navigateByUrl('/emp-list');
    })
  }

  
  fillFormToUpdate(emp: Emp){

  }

}
