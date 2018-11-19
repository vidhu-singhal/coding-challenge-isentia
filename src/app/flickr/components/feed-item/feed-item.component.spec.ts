import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedItemComponent} from './feed-item.component';
import {ButtonModule} from '../../../../../node_modules/primeng/button';
import {TooltipModule} from '../../../../../node_modules/primeng/tooltip';
import {CardModule} from '../../../../../node_modules/primeng/card';

fdescribe('FeedItemComponent', () => {
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedItemComponent ],
      imports: [
        // PrimeNG Modules
        ButtonModule,
        TooltipModule,
        CardModule,
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    component.item = {media: {
      }};
    component.searchTags = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
