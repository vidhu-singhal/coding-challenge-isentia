import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });

  it('checks if array contains item', () => {
    const service: UtilService = TestBed.get(UtilService);

    const array: string[] = ['firstItem', 'secondItem', 'thirdItem'];
    const item = 'firstItem';

    expect(service.contains(array, item)).toBeTruthy();
  });

  it('checks if array contains item', () => {
    const service: UtilService = TestBed.get(UtilService);

    const array: string[] = ['firstItem', 'secondItem', 'thirdItem'];
    const item = 'nonExistentItem';

    expect(service.contains(array, item)).toBeFalsy();
  });

});
