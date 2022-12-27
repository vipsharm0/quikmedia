import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkOrderlisttableComponent } from './qk-orderlisttable.component';

describe('QkOrderlisttableComponent', () => {
  let component: QkOrderlisttableComponent;
  let fixture: ComponentFixture<QkOrderlisttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkOrderlisttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkOrderlisttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
