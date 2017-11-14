import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

latitude: int;
longitude: int;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  Location() {
	this.geolocation.getCurrentPosition().then((resp) => {
		console.log(resp.coords.latitude);
		console.log (resp.coords.longitude);
	}).catch((error) => {
	  	console.log('Error getting location', error);
	});

	let watch = this.geolocation.watchPosition();
	watch.subscribe((data) => {
	// data can be a set of coordinates, or an error (if an error occurred).
	this.latitude= data.coords.latitude;
	this.longitude=data.coords.longitude;
	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocPage');
  }

}
