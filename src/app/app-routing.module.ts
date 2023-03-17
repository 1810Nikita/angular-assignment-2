import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'add-emp', component: AddEmployeeComponent },
  { path: 'emp-list', component: EmployeeListComponent },
  { path: '',   redirectTo: '/emp-list', pathMatch: 'full' },
  {path:'update/:id',component: AddEmployeeComponent},
  {path:'list/:id',component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
