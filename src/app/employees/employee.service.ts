import { IEmployee } from "./employee";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    private employeesUrl: string = './api/employees/employees.json'
    // private employeesUrl: string = 'http://localhost:8080/employee/getall'

    constructor(private _http: HttpClient){
    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(this.employeesUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

private handleError(err : HttpErrorResponse) {  
    return Observable.throw(err.message) 
}
}