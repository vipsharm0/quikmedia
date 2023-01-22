import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkDelieverytableComponent } from './qk.delieverytable.component';

describe('QkDelieverytableComponent', () => {
  let component: QkDelieverytableComponent;
  let fixture: ComponentFixture<QkDelieverytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkDelieverytableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkDelieverytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
