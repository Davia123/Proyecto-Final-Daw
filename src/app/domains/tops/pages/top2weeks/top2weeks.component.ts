import { Component, OnInit } from '@angular/core';
import { TopsService } from '../../services/tops.service';

@Component({
  selector: 'app-top2weeks',
  templateUrl: './top2weeks.component.html',
  styleUrls: ['./top2weeks.component.css'],
})
export class Top2weeksComponent implements OnInit {
  constructor(private topsService: TopsService) {}

  ngOnInit() {
    this.topsService.getTop2Weeks().subscribe((data: any) => {
      console.log('Francia');
      console.log(data);
    });
  }
}
