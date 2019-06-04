import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PublicFeedComponent} from './flickr/components/public-feed/public-feed.component';
import {RoutingModule} from './routing/routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DataViewModule} from 'primeng/dataview';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProgressBarModule} from 'primeng/progressbar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FieldsetModule} from 'primeng/fieldset';
import {SidebarModule} from 'primeng/sidebar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ChipsModule} from 'primeng/chips';
import {CardModule} from 'primeng/card';
import {KeyFilterModule} from 'primeng/keyfilter';
import {DragDropModule} from 'primeng/dragdrop';

import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {FeedItemComponent} from './flickr/components/feed-item/feed-item.component';
import {CarouselModule} from 'primeng/primeng';
import { CoffeeBuddyComponent } from './coffee-buddy-component/coffee-buddy.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicFeedComponent,
    FeedItemComponent,
    CoffeeBuddyComponent
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
    KeyFilterModule,
    CarouselModule,
    DragDropModule,

    // Service Worker for potential caching of resources
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
