import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Login';
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  public user: object;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/task']);
    }
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;
        await this.authService.login(email, password).subscribe(data => {
          this.authService.user = data.user;
          this.authService.setToken(data.token);
          this.router.navigate(['/task']);
        },err => {
          this.loginInvalid = true;
        });
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
