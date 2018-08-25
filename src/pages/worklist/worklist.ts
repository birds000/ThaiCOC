import { PatientInfo } from './../patien/patien';
import { ViewDatePage } from './../view-date/view-date';
import { FornexPage } from './../fornex/fornex';
import { DatePicker } from '@ionic-native/date-picker';
import { FilterPage } from './../filter/filter';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-worklist',
  templateUrl: 'worklist.html',
})
export class WorklistPage {

  date : Date;
  searchQuery: string = '';
  items: Array<PatientInfo> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker, public alertCtrl: AlertController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items.push({ id: "01234", perfix: "นาย", name: "ธรรมศักดิ์ สาสุข", age: "18", sex: "ชาย", idHptRefer: "11065", idHptReceive: "03142", type: "1 (ช่วยเหลือตัวเองได้ทั้งหมด)", diagnosis: "Obstructed labour due to fetopelvic disprotion, unspecified", address: "ซ 119 ม.1 หมู่บ้านแก้งครัอ ต.ช่องสามหมอ อ.แก้งคร้อ จ.ชัยภูมิ", tel: "0878594322" });
    this.items.push({ id: "01234", perfix: "นาย", name: "ไดโน ขอนแก่น", age: "18", sex: "ชาย", idHptRefer: "11065", idHptReceive: "03142", type: "1 (ช่วยเหลือตัวเองได้ทั้งหมด)", diagnosis: "Obstructed labour due to fetopelvic disprotion, unspecified", address: "ซ 119 ม.1 หมู่บ้านแก้งครัอ ต.ช่องสามหมอ อ.แก้งคร้อ จ.ชัยภูมิ", tel: "0878594322" });
    this.items.push({ id: "01234", perfix: "นาย", name: "โอ๊บป้า ซัง", age: "18", sex: "ชาย", idHptRefer: "11065", idHptReceive: "03142", type: "1 (ช่วยเหลือตัวเองได้ทั้งหมด)", diagnosis: "Obstructed labour due to fetopelvic disprotion, unspecified", address: "ซ 119 ม.1 หมู่บ้านแก้งครัอ ต.ช่องสามหมอ อ.แก้งคร้อ จ.ชัยภูมิ", tel: "0878594322" });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  gotoFilter() {
    this.navCtrl.push(FilterPage);
  }

  addform() {
    this.navCtrl.push(FornexPage);
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
  
  // let alert = this.alertCtrl.create({
  // });
  // alert.present();
  
  showCalendar(){
    this.navCtrl.push(ViewDatePage);
  }

}