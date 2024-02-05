import { Component, OnInit } from '@angular/core';
import { TopsService } from '../../services/tops.service';
import { GamesService } from 'src/app/domains/shared/services/games.service';
import { TopGame, TopGames } from '../../interfaces/top-game.interface';

@Component({
  selector: 'app-top2weeks',
  templateUrl: './top2weeks.component.html',
  styleUrls: ['./top2weeks.component.css'],
})
export class Top2weeksComponent implements OnInit {
  topGames: TopGame[] = [];
  isChart = false;

  constructor(
    private topsService: TopsService,
    private gamesService: GamesService
  ) {}

  ngOnInit() {
    this.topsService.getTop2Weeks().subscribe((data: TopGames) => {
      console.log(data);
      for (const game in data) {
        this.topGames.push(data[game]);
      }
    });
  }

  handleChart() {
    this.isChart = !this.isChart;
  }
}
