import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchprojectComponent } from './searchproject.component';

describe('SearchprojectComponent', () => {
  let component: SearchprojectComponent;
  let fixture: ComponentFixture<SearchprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
