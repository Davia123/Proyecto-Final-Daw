import { Component, OnInit } from '@angular/core';
import { CategoriesGamesService } from '../../services/categories-games.service';
import { Game, ListedGames } from '../../interfaces/listedGames';

@Component({
  selector: 'app-supervivenciaCategory',
  templateUrl: './supervivenciaCategory.component.html',
  styleUrls: ['./supervivenciaCategory.component.css'],
})
export class SupervivenciaCategoryComponent implements OnInit {
  listedGames: Game[] = [];

  constructor(private categoriesGamesService: CategoriesGamesService) {}

  ngOnInit() {
    this.categoriesGamesService
      .getGamesByGenre('platformer')
      .subscribe((data: ListedGames) => {
        this.listedGames = data.results;
      });
  }
}
