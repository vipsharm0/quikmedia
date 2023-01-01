import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkConversionExecuteComponent } from './qk.conversion.inputupload.component';

describe('QkConversionExecuteComponent', () => {
  let component: QkConversionExecuteComponent;
  let fixture: ComponentFixture<QkConversionExecuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkConversionExecuteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkConversionExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
