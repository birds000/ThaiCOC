import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addnew',
  templateUrl: 'addnew.html',
})
export class AddnewPage {

  forms: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.PushForm();
  }

  pop() {
    this.navCtrl.pop();
  }

  PushForm() {
    this.forms = [
      'ผู้สูงอายุ', 'จิตเวช', 'stroke', 'ผู้พิการ', 'ศัลยกรรมกระดูก', 'แม่และเด็ก', 'นักกายภาพ', 'PC', 'ศัลยกรรม', 'DM',
      'ผู้ป่วยเด็ก', 'มะเร็ง', 'TB', 'CAPD', 'STEMI', 'ANC', 'CKD', 'COPD', 'อื่นๆ', 'URO', 'เด็กน้ำหนักน้อยและคลอดก่อนกำหนด',
      'truama', 'ENT', 'HT', 'ผู้ป่วยในพระราชานุเคราะห์', 'Asthma','IMC',
    ]
  }

}
