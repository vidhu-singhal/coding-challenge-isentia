import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PublicFeedComponent} from './flickr/components/flickr/public-feed/public-feed.component';
import {RoutingModule} from './routing/routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ChipsModule} from 'primeng/chips';
import {DataViewModule} from 'primeng/dataview';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MultiSelectModule} from 'primeng/multiselect';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule, MatFormFieldModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PublicFeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,

    NgbModule,

    MatSnackBarModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,

    ButtonModule,
    MessagesModule,
    MessageModule,
    ChipsModule,
    DataViewModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    ProgressBarModule,
    AutoCompleteModule,
    MultiSelectModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
