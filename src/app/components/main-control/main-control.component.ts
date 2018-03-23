import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-control',
  templateUrl: './main-control.component.html',
  styleUrls: ['./main-control.component.scss']
})
export class MainControlComponent implements OnInit {
  toggle: boolean = false;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {

  }


  logOut() {
    this.authService.logOut();
  }

}
