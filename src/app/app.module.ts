import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list.component';
import { ProgressCircleComponent } from './shared/progress-circle/progress-circle.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ProgressCircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
