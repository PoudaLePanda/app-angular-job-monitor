import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Feathers } from './services/feathers.service';
import { ProxyComponent } from './components/proxy.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { NothingComponent } from './components/nothing/nothing.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { MainControlComponent } from './components/main-control/main-control.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/job/job.component';
import { UsersComponent } from './components/users/users.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProxyComponent,
    PageNotFoundComponent,
    NothingComponent,
    MonitorComponent,
    MainControlComponent,
    JobsComponent,
    JobComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    Feathers,
    DataService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
