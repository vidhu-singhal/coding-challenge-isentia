import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilService} from '../../../util/services/util.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent {
  @Input() item: any;
  @Input() searchTags: string[];
  @Output() searchTagToggled = new EventEmitter();

  constructor(public utilService: UtilService) { }
}
