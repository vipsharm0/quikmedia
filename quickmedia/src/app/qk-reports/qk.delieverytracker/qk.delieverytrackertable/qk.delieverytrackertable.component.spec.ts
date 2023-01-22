import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkDelieverytrackertableComponent } from './qk.delieverytrackertable.component';

describe('QkDelieverytrackertableComponent', () => {
  let component: QkDelieverytrackertableComponent;
  let fixture: ComponentFixture<QkDelieverytrackertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkDelieverytrackertableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkDelieverytrackertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
