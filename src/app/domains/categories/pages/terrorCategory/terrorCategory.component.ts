import { Component, OnInit } from '@angular/core';
import { CategoriesGamesService } from '../../services/categories-games.service';
import { Game, ListedGames } from '../../interfaces/listedGames';

@Component({
  selector: 'app-terrorCategory',
  templateUrl: './terrorCategory.component.html',
  styleUrls: ['./terrorCategory.component.css'],
})
export class TerrorCategoryComponent implements OnInit {
  listedGames: Game[] = [];

  constructor(private categoriesGamesService: CategoriesGamesService) {}

  ngOnInit() {
    this.categoriesGamesService
      .getGamesByGenre('shooter')
      .subscribe((data: ListedGames) => {
        this.listedGames = data.results;
      });
  }
}
