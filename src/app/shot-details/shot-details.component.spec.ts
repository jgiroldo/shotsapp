import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotDetailsComponent } from './shot-details.component';

describe('ShotDetailsComponent', () => {
  let component: ShotDetailsComponent;
  let fixture: ComponentFixture<ShotDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
