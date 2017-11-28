import { Component } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { VideoPlayer } from '@ionic-native/video-player';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})

export class VideoPage {
  fullPath: string;

  constructor(private mediaCapture: MediaCapture,
              private videoPlayer: VideoPlayer) {
  }

  takeVideo() {
    let options: CaptureVideoOptions = {limit: 1};
    this.mediaCapture.captureVideo(options)
      .then(
        (data: MediaFile[]) => {
          this.fullPath = data[0].fullPath;
          console.log(data);
        },
        (err: CaptureError) => console.error(err)
      );
  }

  playVideo() {
    this.videoPlayer.play(this.fullPath).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
}
