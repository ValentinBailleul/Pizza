import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerapreviewPageRoutingModule } from './camerapreview-routing.module';

import { CamerapreviewPage } from './camerapreview.page';
// tslint:disable-next-line:max-line-length
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerapreviewPageRoutingModule
  ],
  declarations: [CamerapreviewPage],
  providers: [CameraPreview]
})
export class CamerapreviewPageModule {}
