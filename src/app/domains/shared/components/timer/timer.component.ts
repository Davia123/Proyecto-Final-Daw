import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  @Input() secondsLeft = 10;

  constructor() {}

  ngOnInit() {
    setInterval(() => this.secondsLeft--, 1000);
  }
}
