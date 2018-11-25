import {Component} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  constructor(private gameService: GameService) {
  }

  //returns the current turn % 2 to switch between player one and player two
  getCurrentTurn() : number { return (this.gameService.turnCount + 1) % 2; }

}
