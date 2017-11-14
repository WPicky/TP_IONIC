import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoCapturePlus: VideoCapturePlus) {
  }


/**TakeVideo () {
	const options: VideoCapturePlusOptions = {
	   limit: 1,
	   highquality: true,
	   portraitOverlay: 'assets/img/camera/overlay/portrait.png',
	   landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
	}

	this.videoCapturePlus.captureVideo(options).then(mediafile: MediaFile[] => console.log(mediafile), error => console.log('Something went wrong'));
}*/

	  ionViewDidLoad() {
	    console.log('ionViewDidLoad VideoPage');
	  }

}
