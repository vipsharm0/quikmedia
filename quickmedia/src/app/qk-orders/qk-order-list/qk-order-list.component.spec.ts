import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkOrderListComponent } from './qk-order-list.component';

describe('QkOrderListComponent', () => {
  let component: QkOrderListComponent;
  let fixture: ComponentFixture<QkOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkOrderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
