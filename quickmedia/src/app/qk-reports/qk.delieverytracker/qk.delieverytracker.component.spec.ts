import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkDelieverytrackerComponent } from './qk.delieverytracker.component';

describe('QkDelieverytrackerComponent', () => {
  let component: QkDelieverytrackerComponent;
  let fixture: ComponentFixture<QkDelieverytrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkDelieverytrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkDelieverytrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
