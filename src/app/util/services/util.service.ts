import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public contains(array: string[], item: string) {
    return array.filter(elem => elem.trim().toLowerCase() === item.trim().toLowerCase()).length > 0;
  }
}
