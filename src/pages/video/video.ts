import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

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
  fullPath: string;


  constructor(private mediaCapture: MediaCapture) {
  }


  TakeVideo() {
    const options: CaptureImageOptions = {limit: 3};
    this.mediaCapture.captureImage(options)
      .then(
        (data: MediaFile[]) => {
          this.fullPath = data[0].fullPath;
          console.log(data);
        },
        (err: CaptureError) => console.error(err)
      );


    ionViewDidLoad()
    {
      console.log('ionViewDidLoad VideoPage');
    }

  }
}
