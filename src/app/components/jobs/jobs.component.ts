import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsComponent implements OnInit {
  jobs$: Observable<any[]>;
  jobsFUTUR: any [];
  jobsTODAY: any [];
  jobsDONE: any [];

  constructor(private data: DataService) {
    // get messages from data service
    this.jobs$ = data.jobs$()
      // our data is paginated, so map to .data
      .map(m => m.data)
      // reverse the messages array, to have the most recent message at the end
      // necessary because we get a descendingly sorted array from the data service
      .map(m => m.reverse());
  }

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
