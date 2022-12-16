import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkMprlisttableComponent } from './qk.mprlisttable.component';

describe('QkMprlisttableComponent', () => {
  let component: QkMprlisttableComponent;
  let fixture: ComponentFixture<QkMprlisttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkMprlisttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkMprlisttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
