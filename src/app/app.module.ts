import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { WorklistPage } from './../pages/worklist/worklist';
import { ReferstatusPage } from './../pages/referstatus/referstatus';
import { RecievePage } from './../pages/recieve/recieve';
import { AuthorityPage } from './../pages/authority/authority';
import { FornexPage } from './../pages/fornex/fornex';
import { FilterPage } from './../pages/filter/filter';
import { AddnewPage } from './../pages/fornex/addnew/addnew';
import { ChangePage } from './../pages/authority/change/change';
import { EventModalPage } from './../pages/event-modal/event-modal';
import { ViewDatePage } from './../pages/view-date/view-date';
import { PatienPage } from './../pages/patien/patien';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';
import { NgCalendarModule  } from 'ionic2-calendar';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    RecievePage,
    ReferstatusPage,
    WorklistPage,
    AuthorityPage,
    FornexPage,
    FilterPage,
    AddnewPage,
    ChangePage,
    ViewDatePage,
    EventModalPage,
    PatienPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(highcharts),
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    RecievePage,
    ReferstatusPage,
    WorklistPage,
    AuthorityPage,
    FornexPage,
    FilterPage,
    AddnewPage,
    ChangePage,
    ViewDatePage,
    EventModalPage,
    PatienPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
