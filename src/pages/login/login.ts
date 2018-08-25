import { DashboardPage } from './../dashboard/dashboard';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') pass;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  signin(){
    // if(this.user.value == "admin" && this.pass.value == "1234"){
      this.navCtrl.setRoot(DashboardPage);      
    // }
    // else{
    //   let alert = this.alertCtrl.create({
    //     title: 'Fail',
    //     subTitle: 'Please check your username and password.',
    //   });
    //   alert.present();
    // }
  }

}
