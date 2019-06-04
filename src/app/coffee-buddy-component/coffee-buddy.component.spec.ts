import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeBuddyComponent } from './coffee-buddy.component';

describe('CoffeeBuddyComponent', () => {
  let component: CoffeeBuddyComponent;
  let fixture: ComponentFixture<CoffeeBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
