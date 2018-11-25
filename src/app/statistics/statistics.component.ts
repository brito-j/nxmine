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

  players: object[] = [];

  viewPlayerData: boolean = false;

  viewTitle: string = 'View Player Data';

  ngOnInit() {
    this.dataService.getGames().subscribe(games => this.games.push(games));
    this.dataService.getPlayers().subscribe(players => this.players.push(players));
  }

  switchView() {
    this.viewPlayerData = !this.viewPlayerData;
    this.viewTitle = this.viewPlayerData ? 'View Game Data' : 'View Player Data';
  }

}
