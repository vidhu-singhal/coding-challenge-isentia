import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaChecklistComponent } from './qa-checklist.component';

describe('QaChecklistComponent', () => {
  let component: QaChecklistComponent;
  let fixture: ComponentFixture<QaChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
