import { Component } from '@angular/core';
import { IonicPage, ToastController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geoloc',
  templateUrl: 'geoloc.html',
})
export class GeolocPage {

  positions = [];
	latitude: number;
	longitude: number;

  constructor (private geolocation: Geolocation) {
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  Location() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
      this.presentToast("Veuillez activer la localisation");
    });
  }

  watch() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.positions.push(data.coords.latitude + " " + data.coords.longitude);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocPage');
  }

}
