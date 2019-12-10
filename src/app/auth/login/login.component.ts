import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public error: string = '';


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.setupForm();
  }

  handleLogin() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(data => {
      console.log(data)
      if (data.user.role === 'PATIENT') {
        console.log('usao')
        this.router.navigate(['/app/doctor']);
      }
    },
      error => {
        this.error = error.error.error;
      })
  }

  handleRegister() {
    this.router.navigate(['/auth/register']);

  }

  private setupForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }

}
