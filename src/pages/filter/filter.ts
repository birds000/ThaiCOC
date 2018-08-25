import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  visible1: boolean;
  visible2: boolean;  
  typeDis: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker) {
    this.PushTypeDis();
  }

  pop() {
    this.navCtrl.pop();
  }

  ShowDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
      );
  }

  PushTypeDis() {
    this.typeDis = [
      'กลุ่มหญิงตั้งครรภ์', 'กลุ่มหญิงหลังคลอด', 'ผู้สูงอายุ', 'เด็กน้ำหนักน้อยคลอดก่อนกำหนด', 'เด็ก', 'DM', 'HT', 'COPD',
      'Stroke', 'STEMI', 'CKD', 'CAPD', 'Asthma', 'Trauma', 'ศัลยกรรมกระดูก', 'ศัลยกรรม', 'จิตเวช', 'มะเร็ง', 'ผู้พิการ',
      'วัณโรค', 'PalliativeCare', 'Hemodialysis', 'ENT', 'URO', 'อื่นๆ'
    ];

  }

}
