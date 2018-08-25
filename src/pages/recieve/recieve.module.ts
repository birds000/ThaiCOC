import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecievePage } from './recieve';

@NgModule({
  declarations: [
    RecievePage,
  ],
  imports: [
    IonicPageModule.forChild(RecievePage),
  ],
})
export class RecievePageModule {}
