import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';

@Component({
  selector: 'pm-employees',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {

  constructor(private _employeeService: EmployeeService) {
  }

  pageTitle: string = 'List of employees';
  _listFilter: string = '';
  errorMessage: any;
  filteredEmployees: IEmployee[];
  employees: IEmployee[];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployees = this._listFilter ? this.filterEmployees(this.listFilter) : this.employees;
  }

  filterEmployees(value: string): IEmployee[] {
    this._listFilter = value;
    return this.employees.filter(employee => employee.firstName.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1)
  }

  

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
        this.filteredEmployees = this.employees;
      },
        error => this.errorMessage = <any>error)
    
  }

}
