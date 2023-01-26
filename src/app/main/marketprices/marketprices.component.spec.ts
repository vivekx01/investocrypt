import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketpricesComponent } from './marketprices.component';

describe('MarketpricesComponent', () => {
  let component: MarketpricesComponent;
  let fixture: ComponentFixture<MarketpricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketpricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
