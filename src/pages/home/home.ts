import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public toastCtrl: ToastController) {

  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  Declencheur(){
    this.presentToast("Ce bouton n'est d'aucune utilité ...")
    console.log("c'est ok");
  }

  Declencheur2(){
    this.presentToast("Bien tenté ! Mais il ne se passe rien ici...")
  }

}
