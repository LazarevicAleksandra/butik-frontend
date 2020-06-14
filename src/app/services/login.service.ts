import { LoginResponse } from './../dto/login-response';
import { StorageService } from 'src/app/services/storage.service';
import { Injectable } from '@angular/core';
import { Routes } from '../constants/routes';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../dto/login-request';

@Injectable()
export class LoginService {
  private readonly AUTH_URL = Routes.SERVER_URL + '/login';

    private logged = new BehaviorSubject(false);
    isLoggedIn = this.logged.asObservable();

  constructor(private httpClient: HttpClient,private storageService:StorageService) { }
  
  changeIsLoggedIn(loggedIn:boolean)
  {
      this.logged.next(loggedIn)
  }

  public login(loginRequest: LoginRequest) {
      return this.httpClient.post<LoginResponse>(this.AUTH_URL+"login", loginRequest);
  }

  isKupacLoggedIn():boolean
  {
      let role = this.storageService.getLoggedInUserRole();
      return role=="1";
  }

  isRadnikLoggedIn():boolean
  {
      let role = this.storageService.getLoggedInUserRole();
      return role=="2";
  }

  public logout()
  {
      this.storageService.deleteAllInStorage();
      this.changeIsLoggedIn(false);
  }

}
