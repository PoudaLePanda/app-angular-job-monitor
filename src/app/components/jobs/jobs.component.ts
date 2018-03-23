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
  jobsFUTUR: any[];
  jobsTODAY: any[];
  jobsDONE: any[];
  jobsFUTUR$: Observable<any[]>;
  jobsTODAY$: Observable<any[]>;
  jobsDONE$: Observable<any[]>;
  today = new Date();

  constructor(private dataService: DataService) {
    // get messages from data service
    // this.jobs$ = dataService.jobs$()
    //   // our data is paginated, so map to .data
    //   .map(m => m.data)
    //   // reverse the messages array, to have the most recent message at the end
    //   // necessary because we get a descendingly sorted array from the data service
    //   .map(m => m.reverse());


    // this.jobsFUTUR$ = dataService.jobs$()
    //   .map(m => m.data)
    //   .map(m => m.reverse());
    this.jobsFUTUR$ = dataService.jobs$()
    .map(jobs => {
      jobs.filter(job => {
        return new Date(job.dateCommande).getTime() >= this.today.getTime() &&
          new Date(job.dateCommande).getTime() <= this.today.getTime();
      });
    })
    .map(m => m.data);
  }

  ngOnInit() {
    // this.jobsFUTUR = this.jobs$.filter((item: any) => {
    //   return item.date.getTime() >= fromDate.getTime() &&
    //     item.date.getTime() <= toDate.getTime();
    // });
    // this.jobsFUTUR = this.jobs$.filter(
    //   book => book.store_id === this.store.id);
    // this.jobsTODAY = this.jobs$.filter(
    //   book => book.store_id === this.store.id);
    // this.jobsDONE = this.jobs$.filter(
    //   book => book.store_id === this.store.id);
  }

}
