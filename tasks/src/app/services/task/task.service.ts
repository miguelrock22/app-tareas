import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Task } from '../../classes/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl = environment.apiUrl+'/task';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task>(this.taskUrl,{
      responseType:'json',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('token')
      }
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || err);
  }
}
