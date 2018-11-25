import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnChanges, OnInit, OnDestroy {

  turnTitle: string = "Your Move:";

  hasWinner: boolean = false;

  playerOne: string = '';

  playerTwo: string = '';

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.playerOne = this.gameService.playerOne;
    this.playerTwo = this.gameService.playerTwo;
  }

  ngOnChanges() {
    this.switchPlayerHighlight();
    this.hasWinner = this.gameService.hasWinner().length > 0;
  }

  ngOnDestroy(): void {
    this.gameService.clearGame();
  }

  @Input('turn') turn: number;

  switchPlayerHighlight() {
    if (this.gameService.hasWinner()) { this.turnTitle = "Winner:" }
    switch (this.turn) {
      case 0:
        if (this.gameService.hasWinner()) {
          document.getElementById("player-two-box").style.outline = "3px dotted green";
          document.getElementById("player-one-box").removeAttribute('style');
        }
        else {
          document.getElementById("player-one-box").style.outline = "3px dotted blue";
          document.getElementById("player-two-box").removeAttribute('style');
        }
        break;
      case 1:
        if (this.gameService.hasWinner()) {
          document.getElementById("player-one-box").style.outline = "3px dotted green";
          document.getElementById("player-two-box").removeAttribute('style');
        }
        else {
          document.getElementById("player-two-box").style.outline = "3px dotted blue";
          document.getElementById("player-one-box").removeAttribute('style');
        }

    }
  }
}


