import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../models/customer';
import { DataSourceChangedEventArgs } from '@syncfusion/ej2-angular-grids';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CrudService extends Subject<DataStateChangeEventArgs>{

  private customersUrl = 'api/customers';  // URL to web api

  constructor(private http: HttpClient) {
    super();
  }

  public execute(state: any): void {
    this.getAllData().subscribe(x => super.next(x as DataStateChangeEventArgs));
  }

  /** GET all data from the server */
  getAllData(): Observable<any[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .map((response: any) => (<any>{
        result: response,
        count: response.length
      }))
      .map((data: any) => data);
  }

  /** POST: add a new record to the server */
  addRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, state.data, httpOptions);
  }

  /** DELETE: delete the record from the server */
  deleteRecord(state: any): Observable<Customer> {
    const id = state.data[0].id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions);
  }

  /** PUT: update the record on the server */
  updateRecord(state: DataSourceChangedEventArgs): Observable<any> {
    return this.http.put(this.customersUrl, state.data, httpOptions);
  }
}
