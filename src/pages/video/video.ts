import { Component } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
//import { VideoPlayer } from '@ionic-native/video-player';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})

export class VideoPage {
  fullPath: string;

  constructor(private mediaCapture: MediaCapture,
             // private videoPlayer: VideoPlayer,
              public toastCtrl: ToastController) {
  }

  takeVideo() {
    const options: CaptureVideoOptions = { limit: 3 };
    this.mediaCapture.captureVideo(options)
      .then(
        (data: MediaFile[]) => {
          this.fullPath = data[0].fullPath;
        },
        (err: CaptureError) => console.error(err)
      );
  }

 /** playVideo() {
    this.videoPlayer.play(this.fullPath).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });*/
  }
