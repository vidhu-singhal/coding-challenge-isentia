import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';

@Component({
  selector: 'app-coffee-buddy-component',
  templateUrl: './coffee-buddy.component.html',
  styleUrls: ['./coffee-buddy.component.scss']
})
export class CoffeeBuddyComponent implements OnInit {

  items$ = from([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]);

  constructor() { }

  ngOnInit() {
    this.items$.subscribe(val => console.log(val));
  }

}
