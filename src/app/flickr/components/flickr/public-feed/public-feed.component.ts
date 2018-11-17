import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PublicFeedService} from '../../../services/public-feed.service';
import {ConfirmationService} from 'primeng/api';
import {DataViewLayoutOptions} from 'primeng/dataview';

@Component({
  selector: 'app-flickr-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.scss']
})
export class PublicFeedComponent implements OnInit, AfterViewInit {
  public tags: string[] = [];
  public shownFeed: any;
  public feed: any;

  constructor(protected publicFeedService: PublicFeedService,
              private confirmationService: ConfirmationService) {
  }

  @ViewChild(DataViewLayoutOptions) dataViewLayoutOptions: DataViewLayoutOptions;

  ngOnInit() {
    this.publicFeedService.getPublicFeed().subscribe(feed => {
      this.feed = feed;
      this.shownFeed = this.feed;
    });
  }

  ngAfterViewInit(): void {
    this.dataViewLayoutOptions.changeLayout(new Event('click'), 'grid');
  }

  public filterFeedByTags() {
    this.shownFeed = this.tags.length == 0 ? this.feed : this.feed.filter(item => {
      let matched: boolean = false;
      this.tags.forEach(tag => {
        if (item.tags.indexOf(tag) != -1) {
          matched = true;
        }
      });
      return matched;
    });
  }

  public reset() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove all tags?',
      accept: () => {
        this.tags = [];
        this.filterFeedByTags();
      }
    });
  }

}
