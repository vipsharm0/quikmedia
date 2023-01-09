import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkClientcampaignsComponent } from './qk.clientcampaigns.component';

describe('QkClientcampaignsComponent', () => {
  let component: QkClientcampaignsComponent;
  let fixture: ComponentFixture<QkClientcampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkClientcampaignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkClientcampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
