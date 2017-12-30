import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRscannerPage } from './q-rscanner';

@NgModule({
  declarations: [
    QRscannerPage,
  ],
  imports: [
    IonicPageModule.forChild(QRscannerPage),
  ],
})
export class QRscannerPageModule {}
