import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnChanges, OnInit, OnDestroy {

  //describes whose move it is or which player won the game
  turnTitle: string = 'Move:';

  //switch to show save game options if true
  hasWinner: boolean = false;

  //name of player one
  playerOne: string = '';

  //name of player two
  playerTwo: string = '';

  constructor(private gameService: GameService) {
  }

  //sets the names of the players
  ngOnInit()
  { this.playerOne = this.gameService.playerOne; this.playerTwo = this.gameService.playerTwo; }

  //switches the name of the player currently outlined
  //checks if the game has a winner
  ngOnChanges()
  { this.switchPlayerOutline(); this.hasWinner = this.gameService.hasWinner().length > 0; }

  //clears the game data when navigating away
  ngOnDestroy() { this.gameService.clearGame(); }

  //switches the name of the player currently outlined each time a mark is placed
  @Input('turn') turn: number;

  //performs the switching of the name of the player currently outlined
  switchPlayerOutline() : void {
    //changes title to reflect winner if the game has a winner
    if (this.gameService.hasWinner()) { this.turnTitle = "Winner:" }

    //outlines the appropriate player based on switching by modding the turn count resulting in 0 or 1
    //changes the outline color to green if the game has a winner
    switch (this.turn) {
      case 0:
        if (this.gameService.hasWinner()) {
          document.getElementById('player-two-box').style.outline = '3px dotted green';
          document.getElementById('player-one-box').removeAttribute('style');
        } else {
          document.getElementById('player-one-box').style.outline = '3px dotted blue';
          document.getElementById('player-two-box').removeAttribute('style');
        }
        break;
      case 1:
        if (this.gameService.hasWinner()) {
          document.getElementById('player-one-box').style.outline = '3px dotted green';
          document.getElementById('player-two-box').removeAttribute('style');
        } else {
          document.getElementById('player-two-box').style.outline = '3px dotted blue';
          document.getElementById('player-one-box').removeAttribute('style');
        }

    }
  }

  //updates the database with the game statistics data
  setGames() : void { this.gameService.setGames(); }
}


