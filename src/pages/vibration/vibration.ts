import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }

  Vibrer1() {

  // Vibrate the device for a second
  // Duration is ignored on iOS.
    this.vibration.vibrate(1000);
  }

  Vibrer2() {
  // Vibrate 2 seconds
  // Pause for 1 second
  // Vibrate for 2 seconds
  // Patterns work on Android and Windows only
    this.vibration.vibrate([2000, 1000, 2000])
  }

  StopVibrer() {
  // Stop any current vibrations immediately
  // Works on Android and Windows only
    this.vibration.vibrate(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

}
