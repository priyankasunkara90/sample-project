import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }
   
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required]
    }); 
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }


    this.loading = true;
    window.setTimeout(function() {
      this.loading = false;
      window.alert('registration succesful');
    }, 2000);

  }
  
  
}


