import {Component, HostListener, OnInit} from '@angular/core';
import {PublicFeedService} from '../../services/public-feed.service';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import {animate, animateChild, group, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {MatSnackBar} from '@angular/material';
import {Subject} from 'rxjs';
import {UtilService} from '../../../util/services/util.service';


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
              style({opacity: 0.5, transform: 'scale(0.2)', offset: 0, position: 'relative', top: '20px'}),
              style({opacity: 1.0, transform: 'scale(1.0)', offset: 1.0, position: 'unset', top: '0px'}),
            ])), animateChild()
          ]), {optional: true}),
        ])

      ])
    ])
  ]

})
export class PublicFeedComponent implements OnInit {
  displaySettingsSidebar = false; // Boolean to govern visibility of Settings Sidebar
  uniqueItemTagsSidebarEnabled = false; // Boolean to govern whether Unique Item Tags Sidebar is enabled
  displayUniqueItemTagsSidebar = false; // Boolean to govern visibility of Unique Item Tags Sidebar
  uniqueItemTagsFieldSetEnabled = false; // Boolean to govern whether Unique Item Tags FieldSet is enabled
  uniqueItemTagsMultiSelectEnabled = false; // Boolean to govern whether Unique Tags Multi-Select is enabled
  liveSearchEnabled = false; // Boolean to govern whether live search will be performed on the input of tags

  loading = false;

  feedItems: any[]; // Processed feedItems received from service
  shownFeedItems: any[]; // Shown feedItems on UI (based on filter specified by auto-complete Dropdown)
  uniqueItemTags: string[] = []; // Unique feedItems item tags extracted from feedItems

  uniqueItemTagsSelectItems: SelectItem[] = []; // Required for Multi-Select
  searchTags: string[] = []; // Supplied tags to be searched
  filteredItemTags: string[] = []; // Tag search auto-complete Dropdown results

  isORBasedTagSearch = false; // Decides whether tagmode for Flickr Feed is 'any' or 'all'

  liveSearchTagsSource = new Subject<string[]>();

  liveSearchTags$ = this.liveSearchTagsSource.asObservable();

  constructor(protected publicFeedService: PublicFeedService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private utilService: UtilService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loading = true;
    this.openSnackBar('Loading Flickr Feed...', {});

    const feedObserver = {
      next: feed => {
        this.loading = false;
        this.processFeed(feed);
        this.openSnackBar('Flickr Feed loaded successfully'
          + (this.searchTags && this.searchTags.length > 0 ? ' based on tags [' + this.searchTags.join(', ') + ']!' : '!'));
      },
      error: error => {
        this.loading = false;
        this.openSnackBar('Error occurred while loading Flickr Feed!');
      }
    };

    this.publicFeedService.getPublicFeed(null).subscribe(feedObserver);

    this.liveSearchTags$.pipe(
      debounceTime(100), // 100ms apart inputs to be considered
      distinctUntilChanged(), // No need to issue http call if input is not changed
      switchMap(() => this.publicFeedService.getPublicFeed(this.searchTags, this.isORBasedTagSearch ? 'any' : 'all'))
    ).subscribe(feedObserver);

  }

  // Process feed to populate feedItems, shownFeedItems, uniqueItemTags and uniqueItemTagsSelectItems
  private processFeed(feed) {
    this.feedItems = feed.items;
    this.shownFeedItems = this.feedItems;

    // Collecting all unique tags
    const uniqueItemTags: Set<string> = new Set<string>();

    this.feedItems.forEach(item => {
      const itemTags: string[] = item.tags.split(' ');

      itemTags.forEach(itemTag => {
        if (itemTag && itemTag.trim() !== '') {
          uniqueItemTags.add(itemTag);
        }
      });
    });

    this.uniqueItemTags = Array.from(uniqueItemTags);

    // This is needed for the item multi-select
    this.uniqueItemTagsSelectItems = [];
    this.uniqueItemTags.forEach(uniqueItemTag => {
      this.uniqueItemTagsSelectItems.push({label: uniqueItemTag, value: uniqueItemTag});
    });
  }

  // Get Auto-complete suggestions
  getTagsAutoCompleteSuggestions(event) {
    const searchQuery = event.query;
    this.filteredItemTags = this.uniqueItemTags.filter(itemTag => itemTag.trim().toLowerCase().startsWith(searchQuery.toLowerCase()));
  }

  // Filter items based on search tags provided (in Auto-complete mode)
  filterLoadedFeedItemsByTags() {
    this.shownFeedItems = this.searchTags.length === 0 ? this.feedItems : this.feedItems.filter(item => {
      let matched: boolean = this.isORBasedTagSearch ? false : true; // Default matched values for ANY and ALL based search
      this.searchTags.forEach(searchTag => {
        const itemTags: string[] = item.tags.split(' ');
        const searchTagMatched = itemTags.filter(itemTag => itemTag.trim().toLowerCase() === searchTag.trim().toLowerCase()).length > 0;

        if (this.isORBasedTagSearch) {
          matched = matched || searchTagMatched;
        } else {
          matched = matched && searchTagMatched;
        }
      });
      return matched;
    });
  }

  // Called when tagmode is changed (from any to all, or vice versa)
  changeTagMode() {
    this.liveSearchOrFilter();
  }

  liveSearchOrFilter() {
    this.liveSearchEnabled ? this.liveSearch() : this.filterLoadedFeedItemsByTags();
  }

  removeAllSearchTags() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove all Search Tags?',
      accept: () => {
        this.searchTags = [];
        this.liveSearchOrFilter();
      }
    });
  }

  addSearchTag(tag: string) {
    this.searchTags.push(tag);
    this.liveSearchOrFilter();
  }

  removeSearchTag(tag: string) {
    this.searchTags.splice(this.searchTags.indexOf(tag), 1);
    this.liveSearchOrFilter();
  }

  toggleSearchTag(tag: string) {
    this.searchTagsContains(tag) ? this.removeSearchTag(tag) : this.addSearchTag(tag);
  }

  searchTagsContains(tag: string) {
    return this.utilService.contains(this.searchTags, tag);
  }

  liveSearch() {
    this.liveSearchTagsSource.next([...this.searchTags]);
    this.loading = true;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // TODO:vsinghal - Find better alternative since keyCode is deprecated now
    if (event.keyCode === 27) { // Escape Key will hide both uniqueItemTagsSidebar and settingsSidebar
      this.displayUniqueItemTagsSidebar = false;
      this.displaySettingsSidebar = false;
    }

    if (event.altKey) {
      switch (event.keyCode) {
        case 83: // Alt + S to toggle visibility of settingsSidebar
          this.displaySettingsSidebar = !this.displaySettingsSidebar;
          break;
      }
    }
  }

  private openSnackBar(message: string, config?: any) {
    const configuration = config || {
      duration: 3000
    };
    this.snackBar.open(message, 'OK', configuration);
  }
}
