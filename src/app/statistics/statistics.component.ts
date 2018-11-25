import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  games: object[] = [];

  ngOnInit() {
    this.dataService.getGames().subscribe(games => this.games.push(games));
  }

}
