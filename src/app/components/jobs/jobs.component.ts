import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsComponent implements OnInit {
  jobs$: Observable<any[]>;
  jobsFUTUR: any[];
  jobsTODAY: any[];
  jobsDONE: any[];
  jobsFUTUR$: Observable<any[]>;
  jobsTODAY$: Observable<any[]>;
  jobsDONE$: Observable<any[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    let today = moment().format('YYYY MM DD');
    let yesterday = moment().subtract(1, 'day').format('YYYY MM DD');
    let afterday = moment().add(1, 'day').format('YYYY MM DD');
    console.log(today);
    console.log(yesterday);
    console.log(afterday);

      console.log(moment(new Date('2018-03-23 08:52:13.598'), 'YYYY MM DD').isSame(today, 'day'))
    // this.jobsFUTUR$ = this.dataService.jobs$()
    // .filter(m => moment(m.data.dateDelivery, 'YYYY MM DD').isAfter(today, 'day'))
    // .map(m => m.data);

    this.jobsTODAY$ = this.dataService.jobs$()
    // .filter(m => moment(new Date(m.data.dateDelivery), 'YYYY MM DD').isSame(today, 'day'))
    .map(m => m.data);

    // this.jobsDONE$ = this.dataService.jobs$()
    // .filter(m => moment(moment(m.data.dateDelivery).format('YYYY MM DD')).isBefore(today, 'day'))
    // .map(m => m.data);
  }

}
