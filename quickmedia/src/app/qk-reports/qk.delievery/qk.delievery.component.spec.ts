import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkDelieveryComponent } from './qk.delievery.component';

describe('QkDelieveryComponent', () => {
  let component: QkDelieveryComponent;
  let fixture: ComponentFixture<QkDelieveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkDelieveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkDelieveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
