import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDoctorComponent } from './home-page-doctor.component';

describe('HomePageDoctorComponent', () => {
  let component: HomePageDoctorComponent;
  let fixture: ComponentFixture<HomePageDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
