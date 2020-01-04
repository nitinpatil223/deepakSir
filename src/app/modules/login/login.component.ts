import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup,  FormBuilder, Validators, ReactiveFormsModule,  FormArray, FormControl } from '@angular/forms';
import { MustMatch } from 'src/app/services/password.match.validator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  // we used reactive forms and validations
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private modalService: NgbModal, @Inject(DOCUMENT) private document: Document) {
   this.createForm();
  }

  createForm() { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{1,}")]],
      password: ['', [Validators.required]],
    }
    );
  }

  
// add class to login page body

  ngOnInit() {
    this.document.body.classList.add('login-page-body');
  }

  ngOnDestroy() {
    this.document.body.classList.remove('login-page-body');
  }

}
