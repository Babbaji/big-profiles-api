import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigProfilesHomeComponent } from './big-profiles-home.component';

describe('BigProfilesHomeComponent', () => {
  let component: BigProfilesHomeComponent;
  let fixture: ComponentFixture<BigProfilesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigProfilesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigProfilesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
