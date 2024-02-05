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

        const montoEnCentavosTransformed = Number(juego.price);
        const montoEnDolares = montoEnCentavosTransformed / 100;
        console.log(montoEnDolares);
        return montoEnDolares;
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
              ticks: {
                callback: function (value, index, values) {
                  return '$' + value; // Agrega el símbolo de dólar al valor del eje y
                },
                color: 'white', // Color del texto en el eje y
              },
            },
            x: {
              ticks: {
                // Color del texto en el eje x
                color: 'white', // Puedes cambiar 'white' al color que desees
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: 'white',
              },
            },
          },
        },
      });
    }, 10);
  }
}
