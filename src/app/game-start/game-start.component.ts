import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent implements OnInit {

  boxShadowStyle: string = '0 0.125rem 0 0 #485969';

  borderStyle: string = '1px solid #485969';

  markBoxes: string[] = ['x1', 'o1', 'x2', 'o2'];

  hasSelection: boolean = false;

  playerOne: string = '';

  playerTwo: string = '';

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  selectMark(markCard: number) {
    this.hasSelection = true;

    for (let i = 0; i < this.markBoxes.length; i++) {
      document.getElementById(this.markBoxes[i]).removeAttribute('style');
    }

    switch (markCard) {
      case 0:
        this.styleCard("x1", "o2");
        this.setPlayer('x', 'o');
        break;
      case 1:
        this.styleCard("o1", "x2");
        this.setPlayer('o', 'x');
        break;
      case 2:
        this.styleCard("o1", "x2");
        this.setPlayer('o', 'x');
        break;
      case 3:
        this.styleCard("x1", "o2");
        this.setPlayer('x', 'o');
    }
  }

  styleCard(playerOneCard: string, playerTwoCard: string) {
    document.getElementById(playerOneCard).style.boxShadow = this.boxShadowStyle;
    document.getElementById(playerOneCard).style.border = this.borderStyle;
    document.getElementById(playerTwoCard).style.boxShadow = this.boxShadowStyle;
    document.getElementById(playerTwoCard).style.border = this.borderStyle;
  }

  setPlayer(playerOneMark: string, playerTwoMark: string) {
    this.gameService.playerOneMark = playerOneMark;
    this.gameService.playerTwoMark = playerTwoMark;
  }

  setNames() {
    this.gameService.playerOne = this.playerOne;
    this.gameService.playerTwo = this.playerTwo;
  }

  isReady() {
    return !(this.hasSelection && this.playerOne.length > 0 && this.playerTwo.length > 0
      && this.playerOne != this.playerTwo);
  }

}
