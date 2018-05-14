import { IEmployee } from "./employee";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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

    getEmployee(id: number): Observable<IEmployee> {
        return this.getEmployees()
            .map((employee: IEmployee[]) => employee.find(e => e.id === id));
    }

private handleError(err : HttpErrorResponse) {  
    return Observable.throw(err.message) 
}
}