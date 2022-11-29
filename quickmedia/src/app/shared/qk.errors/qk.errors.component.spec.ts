import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkErrorsComponent } from './qk.errors.component';

describe('QkErrorsComponent', () => {
  let component: QkErrorsComponent;
  let fixture: ComponentFixture<QkErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
