import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../../classes/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = environment.apiUrl+'/login';
  private registerUrl = environment.apiUrl+'/user';
  public user: object;
  private token = null;


  constructor(private http: HttpClient) { 
  }

  login(email:string, password:string) {
    return this.http.post<User>(this.loginUrl,{email,password},{responseType:'json'})
      .pipe(
        catchError(this.handleError)
      );
  }

  logout(){
    sessionStorage.removeItem('token');
  }

  isLoggedIn(){
    return sessionStorage.getItem('token') ? true : false;
  }

  setToken(token:string){
    this.token = token;
    sessionStorage.setItem('token',this.token);
  }
  
  register(name:string, email: string, password: string){
    return this.http.post<any>(this.registerUrl,{name,email,password},{responseType:'json'})
    .pipe(
      catchError(this.handleError)
    );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || err);
  }
}
