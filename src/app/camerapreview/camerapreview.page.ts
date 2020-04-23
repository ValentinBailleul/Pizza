import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camerapreview',
  templateUrl: './camerapreview.page.html',
  styleUrls: ['./camerapreview.page.scss'],
})
export class CamerapreviewPage implements OnInit, OnDestroy {

  constructor(private cameraPreview: CameraPreview) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.cameraPreview.stopCamera();
  }
  takeCameraPreview() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 75,
      y: 150,
      width: 300,
      height: 300,
      camera: 'back',
    };

    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }

}
