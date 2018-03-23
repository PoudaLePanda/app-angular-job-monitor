import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  public logIn() {
    this.router.navigate(['/dashboard']);
  }

  public logOut() {
    this.router.navigate(['/']);
  }
}
