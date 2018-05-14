import { Component } from '@angular/core';
import { EmployeeService } from './employees/employee.service';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-defult">
		<div class="conteiner-fluid">
      <ul class = 'nav navbar-nav'>
      <li><a [routerLink] = "['/welcome']">Home</a></li>
      <li><a [routerLink] = "['/employees']">Employees List</a></li>
      <li><a [routerLink] = "['/detail']">Detail</a></li>
      </ul>
		</div>
  </nav>
  <div class = 'container'>  
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  pageTitle = 'Employee Portal';
}
