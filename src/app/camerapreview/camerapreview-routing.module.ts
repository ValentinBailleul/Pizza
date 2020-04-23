import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamerapreviewPage } from './camerapreview.page';

const routes: Routes = [
  {
    path: '',
    component: CamerapreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamerapreviewPageRoutingModule {}
