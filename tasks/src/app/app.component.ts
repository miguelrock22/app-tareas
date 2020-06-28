import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestor de tareas';
  user: object;
  loggedin: boolean;
  constructor(
    private router: Router,
    public authService: AuthService
  ){ }

  onCloseClick(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
