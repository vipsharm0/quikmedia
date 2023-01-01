import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkInputuploadtableComponent } from './qk.inputuploadtable.component';

describe('QkInputuploadtableComponent', () => {
  let component: QkInputuploadtableComponent;
  let fixture: ComponentFixture<QkInputuploadtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkInputuploadtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkInputuploadtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
