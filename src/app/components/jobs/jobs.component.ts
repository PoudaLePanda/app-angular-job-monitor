import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobsFUTUR: any [];
  jobsTODAY: any [];
  jobsDONE: any [];

  constructor() { }

  ngOnInit() {
    this.jobsFUTUR = [
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '10'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '20'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '20'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '50'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '30'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '30'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '40'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '60'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '55'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '60'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '60'},
      {'name': 'job', 'status': 'PRODUCTION', 'percent': '70'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '60'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '60'},
      {'name': 'job', 'status': 'PRODUCTION', 'percent': '65'},
      {'name': 'job', 'status': 'STUDIO', 'percent': '60'},
    ]
      this.jobsTODAY = [
      {'name': 'job', 'status': 'PRODUCTION', 'percent': '75'},
      {'name': 'job', 'status': 'PRODUCTION', 'percent': '80'},
      {'name': 'job', 'status': 'PRODUCTION', 'percent': '80'},
      {'name': 'job', 'status': 'PRODUCTION', 'percent': '80'},
    ]
      this.jobsDONE = [
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
      {'name': 'job', 'status': 'DONE', 'percent': '100'},
    ]
  }

}
