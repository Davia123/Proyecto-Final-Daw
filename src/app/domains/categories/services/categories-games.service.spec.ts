/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriesGamesService } from './categories-games.service';

describe('Service: CategoriesGames', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesGamesService]
    });
  });

  it('should ...', inject([CategoriesGamesService], (service: CategoriesGamesService) => {
    expect(service).toBeTruthy();
  }));
});
