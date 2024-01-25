import { Component, OnInit } from '@angular/core';
import { CategoriesGamesService } from '../../services/categories-games.service';
import { Game, ListedGames } from '../../interfaces/listedGames';

@Component({
  selector: 'app-rolCategory',
  templateUrl: './rolCategory.component.html',
  styleUrls: ['./rolCategory.component.css'],
})
export class RolCategoryComponent implements OnInit {
  listedGames: Game[] = [];

  constructor(private categoriesGamesService: CategoriesGamesService) {}

  ngOnInit() {
    this.categoriesGamesService
      .getGamesByGenre('role-playing-games-rpg')
      .subscribe((data: ListedGames) => {
        this.listedGames = data.results;
      });
  }
}
