import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { HuntService } from '../hunt.service';
import { Store } from "@ngrx/store/store";
import { IMainStore } from "app/state-management/main.store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginMessage: string;
  constructor(private router: Router, private huntService: HuntService,
              private fb: FormBuilder, private store: Store<IMainStore>) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
    this.loginForm.get('username').setValidators(Validators.required);
    this.loginForm.get('password').setValidators(Validators.required);
  }

  login() {
    this.huntService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe(data => {
        if (data == 'bad login') {
          // show this
          this.loginMessage = 'Incorrect username or password';
        } else {
          var action = { type: 'LOGGEDIN', payload: data};
          this.router.navigate(['/dashboard']);
        }
      })
  }

  goToNewAccount() {
    this.router.navigate(['/newAccount']);
  }
}
