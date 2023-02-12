import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../models/app.employee.model';

@Component({
  selector: 'nx-mahng-app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employee:Employee;
  employees:Array<Employee>;
  frmEmp:FormGroup;
  constructor(){
    this.employee = new Employee(0,'',0);
    this.employees = new Array<Employee>();
    this.frmEmp = new FormGroup({
      EmpNo:new FormControl<number>(this.employee.EmpNo,{
        nonNullable:true
      }),
      EmpName:new FormControl<string>(this.employee.EmpName,{
        nonNullable:true
      }),
      Salary:new FormControl<number>(this.employee.Salary,{
        nonNullable:true
      })
    });
  }

  clear():void {
    this.employee = new Employee(0,'',0);
    this.frmEmp.setValue(this.employee);
  }
  save():void {
    this.employees.push(this.frmEmp.value);
    alert(JSON.stringify(this.employees));
  }

}
