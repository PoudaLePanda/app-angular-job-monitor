import { Injectable } from '@angular/core';
import { Feathers } from './feathers.service';

/**
 *  Abstraction layer for data management
 *  Technically this isn't needed for feathers-chat,
 *  but you will need it for more complex tasks.
 */
@Injectable()
export class DataService {
  constructor(private feathers: Feathers) {
  }

  jobs$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (<any>this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('jobs'))
      .watch()
      .find({
        query: {
          $sort: {createdAt: -1},
          $limit: 25
        }
      });
  }

  users$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (<any>this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('users'))
      .watch()
      .find();
  }

  sendJob(job: any) {
    if (!job) {
      return;
    }
    // feathers-reactive Observables are hot by default,
    // so we don't need to subscribe to make create() happen.
    this.feathers
      .service('jobs')
      .create(job);
  }
}
