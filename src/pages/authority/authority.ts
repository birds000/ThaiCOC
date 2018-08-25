import { ChangePage } from './change/change';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-authority',
  templateUrl: 'authority.html',
})
export class AuthorityPage {

  items:Array<{id:string,name:string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.items.push({id:"01234",name:"สวัสดี ไทยแคร์คลาวด์"});
    this.items.push({id:"99999",name:"CKDNET"})    
  }

  itemSelected(item){

  }

  alertChangeService(){
    let prompt = this.alertCtrl.create({
      title: 'เปลี่ยนหน่วยบริการ',
      message: "คุณแน่ใจหรือไม่ที่จะเข้าสู้การทำงานในหน่วยงานดังกล่าว?",
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            this.navCtrl.setRoot(ChangePage);
          }
        }
      ]
    });
    prompt.present();
  }

}