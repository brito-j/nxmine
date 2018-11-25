import {Component} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent {

  //style of box shadow
  //used to show a mark is selected
  boxShadowStyle: string = '0 0.125rem 0 0 #485969';

  //style of box border
  //used to show a mark is selected
  borderStyle: string = '1px solid #485969';

  //array of mark options
  markBoxes: string[] = ['x1', 'o1', 'x2', 'o2'];

  //true if each player has selected a mark
  hasSelection: boolean = false;

  //name of player one
  playerOne: string = '';

  //name of player two
  playerTwo: string = '';

  constructor(private gameService: GameService) {
  }

  //applies styling to signify mark selection
  selectMark(markCard: number) : void {
    this.hasSelection = true;

    //clears any previous styles
    for (let i = 0; i < this.markBoxes.length; i++)
      { document.getElementById(this.markBoxes[i]).removeAttribute('style'); }

    //manages styling the appropriate card and setting the marks of the players
    //automatically styles and sets the other mark for the other player
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

  //performs styling the card
  styleCard(playerOneCard: string, playerTwoCard: string) {
    document.getElementById(playerOneCard).style.boxShadow = this.boxShadowStyle;
    document.getElementById(playerOneCard).style.border = this.borderStyle;
    document.getElementById(playerTwoCard).style.boxShadow = this.boxShadowStyle;
    document.getElementById(playerTwoCard).style.border = this.borderStyle;
  }

  //performs setting the mark of the player
  setPlayer(playerOneMark: string, playerTwoMark: string)
    { this.gameService.playerOneMark = playerOneMark; this.gameService.playerTwoMark = playerTwoMark; }

  //sets the names of the players
  setNames()
    { this.gameService.playerOne = this.playerOne; this.gameService.playerTwo = this.playerTwo; }

  //allows navigation to the game grid on the following conditions:
  //1. each player has selected a mark
  //2. each player has entered a name
  //3. both players have different names
  isReady() {
    return !(this.hasSelection && this.playerOne.length > 0 && this.playerTwo.length > 0
      && this.playerOne != this.playerTwo);
  }

}
