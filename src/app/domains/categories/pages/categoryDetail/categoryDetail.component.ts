import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/listedGames';
import { CategoriesGamesService } from '../../services/categories-games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoryDetail',
  templateUrl: './categoryDetail.component.html',
  styleUrls: ['./categoryDetail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  gameSelected!: any;
  gameScreenshots!: any;

  constructor(
    private categoriesGamesService: CategoriesGamesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.categoriesGamesService.getGameById(id).subscribe((data: any) => {
      this.gameSelected = data;
      console.log(data);
    });
    this.categoriesGamesService
      .getScreenshotsById(id)
      .subscribe((data: any) => {
        this.gameScreenshots = data.results;
        console.log(this.gameScreenshots);
      });
  }
}
