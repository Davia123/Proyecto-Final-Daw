import { Component, OnInit } from '@angular/core';
import { CategoriesGamesService } from '../../services/categories-games.service';
import { Game, ListedGames } from '../../interfaces/listedGames';

@Component({
  selector: 'app-cooperativoCategory',
  templateUrl: './cooperativoCategory.component.html',
  styleUrls: ['./cooperativoCategory.component.css'],
})
export class CooperativoCategoryComponent implements OnInit {
  listedGames: Game[] = [];

  constructor(private categoriesGamesService: CategoriesGamesService) {}

  ngOnInit() {
    this.categoriesGamesService
      .getGamesByGenre('massively-multiplayer')
      .subscribe((data: ListedGames) => {
        this.listedGames = data.results;
      });
  }
}
