import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkSpinnerComponent } from './qk.spinner.component';

describe('QkSpinnerComponent', () => {
  let component: QkSpinnerComponent;
  let fixture: ComponentFixture<QkSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
