import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatienPage } from './patien';

@NgModule({
  declarations: [
    PatienPage,
  ],
  imports: [
    IonicPageModule.forChild(PatienPage),
  ],
})
export class PatienPageModule {}
