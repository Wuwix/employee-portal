import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { error } from 'util';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  pageTitle: string;
  employee: IEmployee;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _employeeService: EmployeeService) { }

  ngOnInit() {
    const employeeId = +this._route.snapshot.paramMap.get("id");
    if (employeeId) {
      this.getEmployee(employeeId);
    } 
  }

  getEmployee(id: number) {
    this._employeeService.getEmployee(id).subscribe(
      employee => this.employee = employee,
      error => this.errorMessage = <any>error);
  }

}
