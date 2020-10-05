import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShopCartComponent } from './single-shop-cart.component';

describe('SingleShopCartComponent', () => {
  let component: SingleShopCartComponent;
  let fixture: ComponentFixture<SingleShopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleShopCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
