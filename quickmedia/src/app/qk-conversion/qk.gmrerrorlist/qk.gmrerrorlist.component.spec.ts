import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QkGmrerrorlistComponent } from './qk.gmrerrorlist.component';

describe('QkGmrerrorlistComponent', () => {
  let component: QkGmrerrorlistComponent;
  let fixture: ComponentFixture<QkGmrerrorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QkGmrerrorlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QkGmrerrorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
