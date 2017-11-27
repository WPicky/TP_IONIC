import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Vibration } from '@ionic-native/vibration';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocPageModule } from '../pages/geoloc/geoloc.module';
import { CameraPage } from '../pages/camera/camera';
import { VideoPage } from '../pages/video/video';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';
import { VibrationPage } from '../pages/vibration/vibration';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    VideoPage,
    GoogleMapsPage,
    VibrationPage
  ],
  imports: [
    BrowserModule,
    GeolocPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    VideoPage,
    GoogleMapsPage,
    VibrationPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    VideoCapturePlus,
    GoogleMaps,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
