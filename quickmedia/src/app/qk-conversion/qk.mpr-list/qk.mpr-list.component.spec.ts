import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkMprListComponent } from './qk.mpr-list.component';

describe('QkMprListComponent', () => {
  let component: QkMprListComponent;
  let fixture: ComponentFixture<QkMprListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkMprListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkMprListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
