import { Component, OnInit } from '@angular/core';
import { TopGame, TopGames } from '../../interfaces/top-game.interface';
import { GamesService } from 'src/app/domains/shared/services/games.service';
import { TopsService } from '../../services/tops.service';

@Component({
  selector: 'app-topForever',
  templateUrl: './topForever.component.html',
  styleUrls: ['./topForever.component.css'],
})
export class TopForeverComponent implements OnInit {
  topGames: TopGame[] = [];

  constructor(
    private topsService: TopsService,
    private gamesService: GamesService
  ) {}

  ngOnInit() {
    this.topsService.getTopForever().subscribe((data: TopGames) => {
      console.log(data);
      for (const game in data) {
        this.topGames.push(data[game]);
      }
    });
    /* this.gamesService.getGameByAppIds(10).subscribe((gameInfo: any) => {
      console.log(gameInfo);
    }); */
  }
}
