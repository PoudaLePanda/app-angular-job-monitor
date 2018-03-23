import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$: Observable<any[]>;

  constructor(
    private data: DataService,
  ) {
    // get users from data service
    this.users$ = data.users$()
      // our data is paginated, so map to .data
      .map(u => u.data);
  }

  ngOnInit() {
  }

}
