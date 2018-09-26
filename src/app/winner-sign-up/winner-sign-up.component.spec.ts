import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerSignUpComponent } from './winner-sign-up.component';

describe('WinnerSignUpComponent', () => {
  let component: WinnerSignUpComponent;
  let fixture: ComponentFixture<WinnerSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
