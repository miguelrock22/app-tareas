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

  getTasks(index:number,size:number) {
    return this.http.get<Task>(`${this.taskUrl}?from=${index}&limit=${size}`,{
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

  addTask(task){
    return this.http.post(this.taskUrl,task,{
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

  updateTask(task){
    return this.http.put(this.taskUrl,task,{
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
  
  deleteTask(id: string){
    return this.http.delete(`${this.taskUrl}/${id}`,{
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
