import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkManageemailsComponent } from './qk.manageemails.component';

describe('QkManageemailsComponent', () => {
  let component: QkManageemailsComponent;
  let fixture: ComponentFixture<QkManageemailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkManageemailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkManageemailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
