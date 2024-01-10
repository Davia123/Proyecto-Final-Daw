/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TopsService } from './tops.service';

describe('Service: Tops', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopsService]
    });
  });

  it('should ...', inject([TopsService], (service: TopsService) => {
    expect(service).toBeTruthy();
  }));
});
