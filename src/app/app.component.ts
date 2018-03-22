import { Component } from '@angular/core';
import { EmployeeService } from './employees/employee.service';

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-employees></pm-employees>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  pageTitle = 'Employee Portal';
}
