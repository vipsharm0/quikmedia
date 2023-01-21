import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkConversionlogsComponent } from './qk.conversionlogs.component';

describe('QkConversionlogsComponent', () => {
  let component: QkConversionlogsComponent;
  let fixture: ComponentFixture<QkConversionlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkConversionlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkConversionlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
