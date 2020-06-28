import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = 'Regisrate';
  form: FormGroup;
  private formSubmitAttempt: boolean;
  public user: object;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/task']);
    }
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;
        const name = this.form.get('name').value;
        await this.authService.register(name, email, password).subscribe(data => {
          if(data.ok)
            this.openSnackBar(data.msg);
        },err => {
          this.openSnackBar("Ha ocurrido un error");
        });
      } catch (err) {
        this.openSnackBar("Ha ocurrido un error");
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, "Cerrar", {
      duration: 3000,
    });
  }
}
