import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list.component';
import { ProgressCircleComponent } from './shared/progress-circle/progress-circle.component';
import { WelcomeComponent } from './home/welcome.component';
import { EmployeeDetailComponent } from './employees/employee-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ProgressCircleComponent,
    WelcomeComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'details', component: EmployeeDetailComponent },
      { path: 'details/:id', 
        component: EmployeeDetailComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
