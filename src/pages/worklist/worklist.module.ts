import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorklistPage } from './worklist';

@NgModule({
  declarations: [
    WorklistPage,
  ],
  imports: [
    IonicPageModule.forChild(WorklistPage),
  ],
})
export class WorklistPageModule {}
