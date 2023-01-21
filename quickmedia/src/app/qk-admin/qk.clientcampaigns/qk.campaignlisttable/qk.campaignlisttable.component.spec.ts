import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkCampaignlisttableComponent } from './qk.campaignlisttable.component';

describe('QkCampaignlisttableComponent', () => {
  let component: QkCampaignlisttableComponent;
  let fixture: ComponentFixture<QkCampaignlisttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkCampaignlisttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkCampaignlisttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
