import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public error: string = '';

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.setupForm();
  }

  handleRegister() {
    this.authService.registration(this.registerForm.value).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['auth/login'])
      },
      error => {
        console.log(error)
      }

    )
  }


  private setupForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      rePassword: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      surname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      city: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      country: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      // jmbg: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }

}
