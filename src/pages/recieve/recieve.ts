import { PatientInfo } from './../patien/patien';
import { WorklistPage } from './../worklist/worklist';
import { FornexPage } from './../fornex/fornex';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recieve',
  templateUrl: 'recieve.html',
})
export class RecievePage {

  items: Array<PatientInfo> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items.push({ id: "01234", name: "สวัสดี ไทยแคร์คลาวด์", idHptRefer: "11065", idHptReceive: "03142", type: "1 (ช่วยเหลือตัวเองได้ทั้งหมด)", diagnosis: "Obstructed labour due to fetopelvic disprotion, unspecified", address: "ซ 119 ม.1 หมู่บ้านแก้งครัอ ต.ช่องสามหมอ", tel: "0878594322" });
    this.items.push({ id: "01234", name: "สวัสดี ไทยแคร์คลาวด์", idHptRefer: "11065", idHptReceive: "03142", type: "1 (ช่วยเหลือตัวเองได้ทั้งหมด)", diagnosis: "Obstructed labour due to fetopelvic disprotion, unspecified", address: "ซ 119 ม.1 หมู่บ้านแก้งครัอ ต.ช่องสามหมอ อ.แก้งคร้อ จ.ชัยภูมิ", tel: "0878594322" });

  }    

  gotoWorklist() {
    this.navCtrl.setRoot(WorklistPage);
  }

  alertMove() {
    let prompt = this.alertCtrl.create({
      title: 'ข้อมูลเติ่มเติม',
      message: "10980 - โรงพยาบาลแก้งคร้อ ",
      inputs: [
        {
          label: 'ย้ายไปที่',
          placeholder: 'ค้นหาหน่วยงาน',
        },
      ],
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
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  gotoFornex(){
    this.navCtrl.push(FornexPage);
  }

}