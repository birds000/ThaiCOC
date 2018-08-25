import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from './../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { WorklistPage } from './../pages/worklist/worklist';
import { ReferstatusPage } from './../pages/referstatus/referstatus';
import { RecievePage } from './../pages/recieve/recieve';
import { AuthorityPage } from './../pages/authority/authority';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

    id: string;
    perfix: string; 
    firstName: string; 
    lastName: string; 
    hospital: string; 
    img: string;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.PushResume();

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'สถ่นะการรับ Refer', component: RecievePage },
      { title: 'สถานะการตรวจ', component: WorklistPage },
      { title: 'สถานะการส่ง Refer', component: ReferstatusPage },
      { title: 'เข้าทำงานในหน่วยบริการอื่น', component: AuthorityPage },
      { title: 'ออกจากระบบ', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  PushResume() {
      this.id = "03556";
      this.perfix = "นาย";
      this.firstName = "สวัสดี";
      this.lastName = "ไทยแคร์คลาวด์";
      this.hospital = "รพสต.บ้านนาโพธิ์ใต้ ตำบลนาโพธิ์กลาง";
      this.img = "no-image";
  }

}
