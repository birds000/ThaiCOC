import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-patien',
  templateUrl: 'patien.html',
})
export class PatienPage {

  Patient:Array<PatientInfo>= [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}

export class PatientInfo{
  
  id?: string;
  name?: string;
  perfix?: string;
  age?: string;
  sex?: string;
  idHptRefer?: string;
  idHptReceive?: string;
  type?: string;
  diagnosis?: string;
  address?: string;
  tel?: string;
  img?: string;

}
