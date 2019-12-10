import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setupForm();
  }

  handleRegister() {
    console.log(this.registerForm.value)
    const id = this.route.snapshot.params.id;
    console.log(id);
  }


  private setupForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      rePassword: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      surname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      residanceAddress: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      city: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      country: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      jmbg: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }

}
