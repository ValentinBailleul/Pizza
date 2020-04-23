import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamerapreviewPage } from './camerapreview.page';

describe('CamerapreviewPage', () => {
  let component: CamerapreviewPage;
  let fixture: ComponentFixture<CamerapreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerapreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamerapreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
