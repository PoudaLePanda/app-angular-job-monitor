import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { paneltop, panelbottom, panelcenter } from '../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Feathers } from '../services/feathers.service';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss'],
  animations: [paneltop, panelbottom, panelcenter]
})
export class ProxyComponent implements OnInit {
  loginForm: FormGroup;
  messages: string[] = [];

  constructor(
    private authService: AuthService,
    private feathers: Feathers,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login(event) {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    // try to authenticate with feathers
    if (!email || !password) {
      this.messages.push('Incomplete credentials!');
      return;
    }
    this.feathers.authenticate({
      strategy: 'local',
      email,
      password
    })
      // navigate to base URL on success
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        this.messages.unshift('Wrong credentials!');
      });
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  getRotation(outlet) {
    return this.getState(outlet) ? {} : { 'transform': 'rotate(-2deg)' };
  }
}
