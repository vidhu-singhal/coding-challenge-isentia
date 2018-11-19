import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicFeedComponent} from './public-feed.component';
import {FeedItemComponent} from '../feed-item/feed-item.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '../../../../../node_modules/@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '../../../../../node_modules/@angular/common/http';
import {RoutingModule} from '../../../routing/routing.module';
import {MatSnackBarModule} from '../../../../../node_modules/@angular/material/snack-bar';
import {MatChipsModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {ButtonModule} from '../../../../../node_modules/primeng/button';
import {MessagesModule} from '../../../../../node_modules/primeng/messages';
import {MessageModule} from '../../../../../node_modules/primeng/message';
import {DataViewModule} from '../../../../../node_modules/primeng/dataview';
import {TooltipModule} from '../../../../../node_modules/primeng/tooltip';
import {ConfirmDialogModule, MessageService} from '../../../../../node_modules/primeng/primeng';
import {ProgressBarModule} from '../../../../../node_modules/primeng/progressbar';
import {AutoCompleteModule} from '../../../../../node_modules/primeng/autocomplete';
import {MultiSelectModule} from '../../../../../node_modules/primeng/multiselect';
import {DropdownModule} from '../../../../../node_modules/primeng/dropdown';
import {ToggleButtonModule} from '../../../../../node_modules/primeng/togglebutton';
import {SelectButtonModule} from '../../../../../node_modules/primeng/selectbutton';
import {FieldsetModule} from '../../../../../node_modules/primeng/fieldset';
import {SidebarModule} from '../../../../../node_modules/primeng/sidebar';
import {InputSwitchModule} from '../../../../../node_modules/primeng/inputswitch';
import {ChipsModule} from '../../../../../node_modules/primeng/chips';
import {CardModule} from '../../../../../node_modules/primeng/card';
import {ConfirmationService} from '../../../../../node_modules/primeng/api';
import {KeyFilterModule} from '../../../../../node_modules/primeng/keyfilter';

describe('PublicFeedComponent', () => {
  let component: PublicFeedComponent;
  let fixture: ComponentFixture<PublicFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicFeedComponent,
        FeedItemComponent
      ],
      imports: [
        // Angular Modules
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // Routing Module
        RoutingModule,

        // Angular Material Modules
        MatSnackBarModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,

        // PrimeNG Modules
        ButtonModule,
        MessagesModule,
        MessageModule,
        DataViewModule,
        TooltipModule,
        ConfirmDialogModule,
        ProgressBarModule,
        AutoCompleteModule,
        MultiSelectModule,
        DropdownModule,
        ToggleButtonModule,
        SelectButtonModule,
        FieldsetModule,
        SidebarModule,
        InputSwitchModule,
        ChipsModule,
        CardModule,
        KeyFilterModule
      ],
      providers: [
        ConfirmationService,
        MessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
