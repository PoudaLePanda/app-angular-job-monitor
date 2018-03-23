import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { paneltop, panelbottom, panelcenter } from '../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss'],
  animations: [ paneltop, panelbottom, panelcenter ]
})
export class ProxyComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login(event) {
    console.log(event);
    console.log(this.loginForm.value);
    this.authService.logIn();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  getRotation(outlet) {
    return this.getState(outlet) ? {} : {'transform': 'rotate(-2deg)'};
  }
}
