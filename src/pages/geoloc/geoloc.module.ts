import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolocPage } from './geoloc';

@NgModule({
  declarations: [
    GeolocPage,
  ],
  imports: [
    IonicPageModule.forChild(GeolocPage),
  ],
})
export class GeolocPageModule {}
