import { Chart } from 'chart.js/auto';
import { Component, Input } from '@angular/core';
import { TopGame } from '../../interfaces/top-game.interface';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.css'],
})
export class TopChartComponent {
  title = 'ng-chart';
  @Input() juegos: TopGame[] = [];
  chart: any = [];

  constructor() {}

  ngOnChanges() {
    setTimeout(() => {
      console.log(this.juegos);
      const precios = this.juegos.map((juego) => {
        console.log(juego);
        console.log(juego.price);

        return parseInt(juego.price.replace(',', ''), 10);
      });
      const nombres = this.juegos.map((juego) => juego.name);
      console.log(precios);
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: nombres,
          datasets: [
            {
              label: 'Precio de juegos',
              data: precios,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }, 1000);
  }
}
