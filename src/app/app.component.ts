import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocPage } from '../pages/geoloc/geoloc';
import { CameraPage } from '../pages/camera/camera';
import { VideoPage } from '../pages/video/video';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';
import { VibrationPage } from '../pages/vibration/vibration';
import { QRscannerPage } from '../pages/q-rscanner/q-rscanner';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Geolocalisation', component: GeolocPage },
      { title: 'Camera', component: CameraPage },
      { title: 'Video', component: VideoPage },
      { title: 'Google Maps', component: GoogleMapsPage },
      { title: 'Vibration', component: VibrationPage },
      { title: 'QR Scanner', component: QRscannerPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
