import { Component, Input } from '@angular/core';
import { TopGame } from '../../interfaces/top-game.interface';

@Component({
  selector: 'app-top-table',
  templateUrl: './top-table.component.html',
  styleUrls: ['./top-table.component.css'],
})
export class TopTableComponent {
  @Input() topGames: TopGame[] = [];
}
