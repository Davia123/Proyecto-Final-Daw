import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/listedGames';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.css'],
})
export class CategoriesCardComponent {
  @Input() game!: Game;
}
