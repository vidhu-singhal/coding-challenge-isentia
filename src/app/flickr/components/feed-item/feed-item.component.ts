import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilService} from '../../../util/services/util.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input() item: any;
  @Input() searchTags: string[];
  @Output() searchTagToggled = new EventEmitter();

  constructor(private utilService: UtilService) { }

  ngOnInit() {
  }

  searchTagsContains(tag: string) {
    return this.utilService.contains(this.searchTags, tag);
  }

  toggleSearchTag(itemTag) {
    this.searchTagToggled.emit(itemTag);
  }
}
