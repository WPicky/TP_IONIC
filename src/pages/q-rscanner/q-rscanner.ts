import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QRscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q-rscanner',
  templateUrl: 'q-rscanner.html',
})
export class QRscannerPage {

  private text : string;
  private format : string;

  constructor(private barcodeScanner: BarcodeScanner, public toastCtrl: ToastController) {
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  readQR() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.text = barcodeData.text;
      this.format = barcodeData.format;
      this.presentToast("Scan effectué !");
    }, (err) => {
      this.presentToast("Une erreur est survenue :(");
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad QRscannerPage');
  }

}
