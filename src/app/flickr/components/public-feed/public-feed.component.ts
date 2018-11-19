import {Component, HostListener, OnInit} from '@angular/core';
import {PublicFeedService} from '../../services/public-feed.service';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import {animate, animateChild, group, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {MatSnackBar} from '@angular/material';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-flickr-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.scss'],
  animations: [
    trigger('bubbleAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        group([
          query(':enter', stagger('40ms', [
            animate('200ms ease-in', keyframes([
              style({opacity: 0.5, transform: 'scale(0.2)', offset: 0, position: "relative", top: "20px"}),
              style({opacity: 1.0, transform: 'scale(1.0)', offset: 1.0, position: "unset", top: "0px"}),
            ])), animateChild()
          ]), {optional: true}),
        ])

      ])
    ])
  ]

})
export class PublicFeedComponent implements OnInit {
  public displaySettingsSidebar: boolean = false;
  public uniqueItemTagsSidebarEnabled: boolean = false;
  public displayUniqueItemTagsSidebar: boolean = false;
  public uniqueItemTagsFieldSetEnabled: boolean = false;
  public uniqueItemTagsMultiSelectEnabled: boolean = false;
  public liveSearchEnabled: boolean = false;

  public loading: boolean = false;

  public feedItems: any[]; // Processed feedItems received from service
  public shownFeedItems: any[];
  public uniqueItemTags: string[] = []; // Unique feedItems item tags extracted from feedItems

  public uniqueItemTagsSelectItems: SelectItem[] = [];
  public searchTags: string[] = []; //
  public filteredItemTags: string[] = []; // Tag search auto-complete dropdown results

  public isORBasedTagSearch: boolean = false;

  liveSearchTagsSource = new Subject<string[]>();

  liveSearchTags$ = this.liveSearchTagsSource.asObservable();

  constructor(protected publicFeedService: PublicFeedService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loading = true;
    this.openSnackBar('Loading Flickr Public Feed...', {});

    let feedObserver = {
      next: feed => {
        this.loading = false;
        this.processFeed(feed);
        // this.messageService.add({key: 'operation-status', severity:'success', summary: 'Success', detail: 'Flickr Public Feed loaded successfully!'});
        this.openSnackBar('Flickr Public Feed loaded successfully' + (this.searchTags && this.searchTags.length > 0 ? ' based on tags [' + this.searchTags.join(', ') + ']!' : '!'));
      },
      error: error => {
        this.loading = false;
        // this.messageService.add({key: 'operation-status', severity:'error', summary: 'Error', detail: 'Error occurred while loading Flickr Public Feed!'});
        this.openSnackBar('Error occurred while loading Flickr Public Feed!');
      }
    };

    this.publicFeedService.getPublicFeed(null).subscribe(feedObserver);

    this.liveSearchTags$.pipe(
      // filter(text => text.length > 2),
      debounceTime(100),
      distinctUntilChanged(),
      switchMap(() => this.publicFeedService.getPublicFeed(this.searchTags, this.isORBasedTagSearch ? 'any' : 'all'))
    ).subscribe(feedObserver);

  }

  private processFeed(feed) {
    this.feedItems = feed.items;
    this.shownFeedItems = this.feedItems;

    let uniqueItemTags: Set<string> = new Set<string>();

    this.feedItems.forEach(item => {
      let itemTags: string[] = item.tags.split(' ');

      itemTags.forEach(itemTag => {
        if(itemTag && itemTag.trim() != '') {
          uniqueItemTags.add(itemTag);
        }
      });
    });

    this.uniqueItemTags = Array.from(uniqueItemTags);

    this.uniqueItemTagsSelectItems = [];
    this.uniqueItemTags.forEach(uniqueItemTag => {
      this.uniqueItemTagsSelectItems.push({label: uniqueItemTag, value: uniqueItemTag});
    });
    // this.uniqueItemTags = this.uniqueItemTags.slice(0, Math.min(5, this.uniqueItemTags.length));
  }

  public filterItemTags(event) {
    let query = event.query;
    this.filteredItemTags = this.uniqueItemTags.filter(itemTag => itemTag.trim().toLowerCase().indexOf(query) != -1);
  }

  private openSnackBar(message: string, config?: any) {
    let configuration = config || {
      duration: 3000
    };
    this.snackBar.open(message, 'OK', configuration);
  }

  public filterFeedItemsByTags() {
    this.shownFeedItems = this.searchTags.length == 0 ? this.feedItems : this.feedItems.filter(item => {
      let matched: boolean = this.isORBasedTagSearch ? false : true; // Default matched values for ANY and ALL based search
      this.searchTags.forEach(searchTag => {
        let itemTags: string[] = item.tags.split(' ');
        let searchTagMatched = itemTags.filter(itemTag => itemTag.trim().toLowerCase() == searchTag.trim().toLowerCase()).length > 0;

        if(this.isORBasedTagSearch) {
          matched = matched || searchTagMatched;
        } else {
          matched = matched && searchTagMatched;
        }
      });
      return matched;
    });
  }

  public changeTagMode() {
    this.loadOrFilter();
  }

  public loadOrFilter() {
    this.liveSearchEnabled ? this.liveSearch() : this.filterFeedItemsByTags();
  }

  public removeAllSearchTags() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove all Search Tags?',
      accept: () => {
        this.searchTags = [];
        this.loadOrFilter();
      }
    });
  }

  public addSearchTag(tag: string) {
    this.searchTags.push(tag);
    this.loadOrFilter();
  }

  public removeSearchTag(tag: string) {
    this.searchTags.splice(this.searchTags.indexOf(tag), 1);
    this.loadOrFilter();
  }

  public toggleSearchTag(tag: string) {
    if(this.searchTagsContains(tag)) {
      this.removeSearchTag(tag);
    } else {
      this.addSearchTag(tag);
    }
  }

  public searchTagsContains(tag: string) {
    return this.searchTags.indexOf(tag) != -1;
  }

  liveSearch(){
    this.liveSearchTagsSource.next([...this.searchTags]);
    this.loading = true;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    //TODO:vsinghal - Find better alternative
    if(event.keyCode == 27) { // Escape Key
      this.displayUniqueItemTagsSidebar = false;
      this.displaySettingsSidebar = false;
    }

    if(event.altKey) {
      switch (event.keyCode) {
        case 83: // Alt + S
          this.displaySettingsSidebar = !this.displaySettingsSidebar;
          break;
      }
    }
  }
}
