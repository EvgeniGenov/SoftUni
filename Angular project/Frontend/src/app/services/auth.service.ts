import { Injectable } from "@angular/core";
import { HTTPService } from "./http.service";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import {AutDataLogin} from "../models/auth-data.model";
import { AuthDataRegister } from "../models/auth-data.model";
import { response } from "express";

@Injectable({ providedIn: "root" })

export class AuthService {
  private isAuthenticated = false;
  private token!: any;
  private userId!: string;
  private data!: any;

  constructor(private http: HTTPService, private router: Router) {}

  getToken() {
    if(sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token')
    }
    
    return this.token;
  }
  
  getIsAuth() {
    return this.isAuthenticated;
  }
  setUserId() {
    
  }
  getUserData() {
    
    return JSON.stringify(this.data['body']);
  }
  getUserId() {
    return this.userId;
  }
  async createUser(body: AuthDataRegister) {
    let errorMessage!: string;
    this.http.makeRegisterRequest(body)
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(err) {
          if (err.status === 409) {
            errorMessage = 'Email already taken';
            
          } else {
            errorMessage = 'An error occurred';
            
          }
        },
        complete() {
          console.log('done');
        }
      });   
  }
  login(body: AutDataLogin) {
    this.http.makeLoginRequest(body)
      .subscribe(response => {
        const token = response.body['token']
        this.token = token;
        sessionStorage.setItem("token", token);
        this.getUserIdData()
      });
  }
  getUserIdData() {
    this.http.getUserDatabyToken()
    .subscribe(response => {
      const data = response
      
      this.data = data;
      
      this.setUserId();
      
    })
    return this.http.getUserDatabyToken()
  }
  getUserInfoByID(userId: string) {
    
  }
}