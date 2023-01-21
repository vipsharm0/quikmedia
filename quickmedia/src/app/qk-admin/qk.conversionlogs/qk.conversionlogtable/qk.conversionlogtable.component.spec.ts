import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkConversionlogtableComponent } from './qk.conversionlogtable.component';

describe('QkConversionlogtableComponent', () => {
  let component: QkConversionlogtableComponent;
  let fixture: ComponentFixture<QkConversionlogtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkConversionlogtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkConversionlogtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
