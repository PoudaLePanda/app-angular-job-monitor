import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { ProxyComponent } from './components/proxy.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { NothingComponent } from './components/nothing/nothing.component';
import { MonitorComponent } from './components/monitor/monitor.component';

const routes: Routes = [
  {
    path: '',
    component: ProxyComponent,
    children: [
      {
        path: '',
        component: NothingComponent,
        data: { state: false }
      },
      {
        path: 'dashboard',
        component: MonitorComponent,
        canActivate: [AuthGuard],
        data: { state: true }
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
