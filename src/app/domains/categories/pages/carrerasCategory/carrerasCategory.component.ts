import { Component, OnInit } from '@angular/core';
import { CategoriesGamesService } from '../../services/categories-games.service';
import { Game, ListedGames } from '../../interfaces/listedGames';

@Component({
  selector: 'app-carrerasCategory',
  templateUrl: './carrerasCategory.component.html',
  styleUrls: ['./carrerasCategory.component.css'],
})
export class CarrerasCategoryComponent implements OnInit {
  listedGames: Game[] = [];

  constructor(private categoriesGamesService: CategoriesGamesService) {}

  ngOnInit() {
    this.categoriesGamesService
      .getGamesByGenre('racing')
      .subscribe((data: ListedGames) => {
        this.listedGames = data.results;
      });
  }
}
