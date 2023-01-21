import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkLocalconversionComponent } from './qk.localconversion.component';

describe('QkLocalconversionComponent', () => {
  let component: QkLocalconversionComponent;
  let fixture: ComponentFixture<QkLocalconversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkLocalconversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkLocalconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
