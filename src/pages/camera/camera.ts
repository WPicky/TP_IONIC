import { Component } from '@angular/core';
import { IonicPage, AlertController, ToastController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  base64Image : string;

  constructor( private camera: Camera, private socialSharing: SocialSharing,private alertCtrl: AlertController,
               public toastCtrl: ToastController) {
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Message Envoyé',
      subTitle: 'Votre message a bien été envoyé',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentSMS() {
    let alert = this.alertCtrl.create({
    title: 'Destinataire',
    message : 'Envoyer ce message à qui ?',
    inputs: [
      {
        name: 'tel',
        placeholder: 'saisir le numéro'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Envoyer',
        handler: data => {
          if (data.tel != null) {
            shareSMS(data.tel);
            this.presentAlert();
          } else {
            this.presentToast("Une erreur est survenue :(");
            return false;
          }
        }
      }
    ]
  });
  alert.present();
}


  TakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum : true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      this.presentToast("Une erreur est survenue :(")
    });
  }


  /*
  PARTAGER LA PHOTO
   */
  shareMail() {
    // Share via email
    this.socialSharing.shareViaEmail('Share with MyApp', 'Photo', ['recipient@example.org']).then(() => {
      //Success
      this.presentToast("Envoi en cours ...")
    }).catch(() => {
      // Error!
      this.presentToast("Le mail ne s'est pas envoyé :(");
    });
  }

  shareSMS(tel : string) {
    // Share via sms
    this.socialSharing.shareViaSMS('Share with MyApp', tel).then(() => {
      //Success
      this.presentToast("Envoi en cours ...")
    }).catch(() => {
      // Error!
      this.presentToast("Le message ne s'est pas envoyé :(");
    });
  }

  shareTwitter() {
    // Share via Twitter
    this.socialSharing.shareViaTwitter('Share with MyApp', this.base64Image, null).then(() => {
      //Success
      this.presentToast("Publication en cours ...")
    }).catch(() => {
      // Error!
      this.presentToast("Le tweet ne s'est pas publié :(");
    });
  }

  shareFacebook() {
    // Share via Facebook
    this.socialSharing.shareViaFacebook('Share with MyApp', this.base64Image, null).then(() => {
      //Success
      this.presentToast("Partage en cours ...")
    }).catch(() => {
      // Error!
      this.presentToast("Le partage a echoué :(");
    });
  }

  shareInsta() {
    // Share via Instagram
    this.socialSharing.shareViaInstagram('Share with MyApp', this.base64Image).then(() => {
      //Success
      this.presentToast("Post en cours ...")
    }).catch(() => {
      // Error!
      this.presentToast("La photo n'a pas pu être postée :(");
    });
  }

}
