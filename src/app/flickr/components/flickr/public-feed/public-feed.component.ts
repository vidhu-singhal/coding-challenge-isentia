import {Component, OnInit} from '@angular/core';
import {PublicFeedService} from '../../../services/public-feed.service';
import {ConfirmationService, MessageService} from 'primeng/api';

import {animate, animateChild, group, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {MatSnackBar} from '@angular/material';
import {timer} from 'rxjs';


@Component({
  selector: 'app-flickr-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.scss'],
  animations: [
    trigger('bubbleAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        group([
          query(':enter', stagger('30ms', [
            animate('200ms ease-in', keyframes([
              style({opacity: 0.5, transform: 'scale(0.5)', offset: 0, position: "relative", top: "20px"}),
              // style({opacity: 0.7, transform: 'scale(0.7)', offset: 0.5, position: "relative", top: "-20px"}),
              style({opacity: 1.0, transform: 'scale(1.0)', offset: 1.0, position: "unset", top: "0px"}),
            ])), animateChild()
          ]), {optional: true}),
        ])

      ])
    ])
  ]

})
export class PublicFeedComponent implements OnInit {
  public loading: boolean = false;

  public searchTags: string[] = [];
  public filteredItemTags: string[] = [];
  public uniqueItemTags: string[] = [];

  public shownFeed: any[];
  public feed: any[];

  constructor(protected publicFeedService: PublicFeedService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loading = true;

    timer(50).subscribe(() => {
      this.publicFeedService.getPublicFeed().subscribe(feed => {
        this.loading = false;
        this.processFeed(feed);
        // this.messageService.add({key: 'operation-status', severity:'success', summary: 'Success', detail: 'Flickr Public Feed loaded successfully!'});
        this.openSnackBar('Flickr Public Feed loaded successfully!');
      }, error => {
        this.loading = false;
        // this.messageService.add({key: 'operation-status', severity:'error', summary: 'Error', detail: 'Error occurred while loading Flickr Public Feed!'});
        this.openSnackBar('Error occurred while loading Flickr Public Feed!');
      });
    })

  }

  private processFeed(feed) {
    this.feed = feed;
    this.shownFeed = this.feed;

    let uniqueItemTags: Set<string> = new Set<string>();

    this.feed.forEach(item => {
      let itemTags: string[] = item.tags.split(' ');

      itemTags.forEach(itemTag => uniqueItemTags.add(itemTag));
    });

    this.uniqueItemTags = Array.from(uniqueItemTags);

    // this.uniqueItemTags = this.uniqueItemTags.slice(0, Math.min(5, this.uniqueItemTags.length));
  }

  public filterItemTags(event) {
    let query = event.query;
    this.filteredItemTags = this.uniqueItemTags.filter(itemTag => itemTag.trim().toLowerCase().indexOf(query) != -1);
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 3000
    });
  }

  public filterFeedByTags() {
    this.shownFeed = this.searchTags.length == 0 ? this.feed : this.feed.filter(item => {
      let matched: boolean = false;
      this.searchTags.forEach(searchTag => {
        let itemTags: string[] = item.tags.split(' ');
        matched = itemTags.filter(itemTag => itemTag.trim().toLowerCase() == searchTag.trim().toLowerCase()).length > 0;
      });
      return matched;
    });
  }

  public removeAllSearchTags() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove all Search Tags?',
      accept: () => {
        this.searchTags = [];
        this.filterFeedByTags();
      }
    });
  }

  public addSearchTag(tag: string) {
    this.searchTags.push(tag);
    this.filterFeedByTags();
  }
}
