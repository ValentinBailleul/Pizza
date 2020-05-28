import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulairePage } from './formulaire.page';

describe('FormulairePage', () => {
  let component: FormulairePage;
  let fixture: ComponentFixture<FormulairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
