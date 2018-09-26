import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCodeCheckComponent } from './promo-code-check.component';

describe('PromoCodeCheckComponent', () => {
  let component: PromoCodeCheckComponent;
  let fixture: ComponentFixture<PromoCodeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoCodeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCodeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
