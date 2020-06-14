import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/dto/login-request';
import { LoginService } from 'src/app/services/login.service';
import { LoginResponse } from 'src/app/dto/login-response';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor(private loginService: LoginService,private router:Router
    ,private snackBarService:SnackBarService,private storageService:StorageService) {
     }

  ngOnInit(): void {
  }

  onSubmit() {
    this.sendLoginRequest();
  }

  sendLoginRequest()
  {
    this.loginService.login(this.createLoginRequestFromForm()).subscribe(loginResponse=>{
      if(loginResponse)
      {
        this.loginUser(loginResponse);
        this.router.navigate(['home']);
      }
      else
        this.snackBarService.showShortSnackBarMessage("Incorrect username/password.");
    })
  }

  createLoginRequestFromForm()
  {
    let password: string = this.loginForm.get('password').value;
    let email: string = this.loginForm.get('email').value;
    return new LoginRequest(email,password);
  }

  loginUser(loginResponse:LoginResponse)
  {
    this.snackBarService.showShortSnackBarMessage("Login successful.");
  }
}