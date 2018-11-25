import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  getCurrentTurn() { return (this.gameService.turnCount + 1) % 2; }

}