import { Component, OnInit } from '@angular/core';
import { CategoriesGamesService } from '../../services/categories-games.service';
import { Game, ListedGames } from '../../interfaces/listedGames';

@Component({
  selector: 'app-actionCategory',
  templateUrl: './actionCategory.component.html',
  styleUrls: ['./actionCategory.component.css'],
})
export class ActionCategoryComponent implements OnInit {
  isLoading = true;
  listedGames: Game[] = [];

  constructor(private categoriesGamesService: CategoriesGamesService) {}

  ngOnInit() {
    this.categoriesGamesService
      .getGamesByGenre('action')
      .subscribe((data: ListedGames) => {
        this.listedGames = data.results;
        this.isLoading = false;
        console.log(data.results);
      });
  }
}
