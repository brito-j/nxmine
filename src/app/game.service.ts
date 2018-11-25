import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private dataService: DataService) {
  }

  //array of mark locations
  //used to track winning marks
  grid: string[] = ['', '', '', '', '', '', '', '', ''];

  //number of turns in a game
  turnCount: number = -1;

  //array of mine locations
  //used to track randomly-generated mines
  mineLoc: boolean[] = [false, false, false, false, false, false, false, false, false];

  //name of player one
  playerOne: string = '';

  //name of player two
  playerTwo: string = '';

  //mark of player one
  //either X or O
  playerOneMark: string = '';

  //mark of player two
  //either X or O
  playerTwoMark: string = '';

  //number of times mines hit X's
  //assigned to p1MineHitCount if playerOneMark is X else assigned to p2MineHitCount
  xMineHitCount: number = 0;

  //number of times mines hit O's
  //assigned to p1MineHitCount if playerOneMark is O else assigned to p2MineHitCount
  oMineHitCount: number = 0;

  //number of times player one hit a mine
  p1MineHitCount: string = '';

  //number of times player two hit a mine
  p2MineHitCount: string = '';

  //name of winner
  winner: string = '';

  //updates array of mark locations each time a mark is placed by a player or removed by a mine
  updateGrid(loc: number, val: string) : void { this.grid[loc] = val; }

  //checks if the game has a winner based on all possible winning mark placements
  //returns the grid locations of the three winning marks if the game has a winner
  //returns an empty string if the game does not yet have a winner
  hasWinner() : string {
    if (this.grid[0] == this.grid[1] && this.grid[1] == this.grid[2] && this.grid[1].length)
      { this.setWinner(); return "012" }
    else if (this.grid[3] == this.grid[4] && this.grid[4] == this.grid[5] && this.grid[4].length)
      { this.setWinner(); return "345" }
    else if (this.grid[6] == this.grid[7] && this.grid[7] == this.grid[8] && this.grid[7].length)
      { this.setWinner(); return "678" }
    else if (this.grid[0] == this.grid[3] && this.grid[3] == this.grid[6] && this.grid[3].length)
      { this.setWinner(); return "036" }
    else if (this.grid[1] == this.grid[4] && this.grid[4] == this.grid[7] && this.grid[4].length)
      { this.setWinner(); return "147" }
    else if (this.grid[2] == this.grid[5] && this.grid[5] == this.grid[8] && this.grid[5].length)
      { this.setWinner(); return "258" }
    else if (this.grid[0] == this.grid[4] && this.grid[4] == this.grid[8] && this.grid[4].length)
      { this.setWinner(); return "048" }
    else if (this.grid[2] == this.grid[4] && this.grid[4] == this.grid[6] && this.grid[4].length)
      { this.setWinner(); return "246" }
    else { return ""; }
  }

  //returns the mark to be placed based on whose turn it is
  //uses an Observable to continuously provide the mark to placed
  turnMark() : Observable<any> {
    //returns an empty Observable if the game already has a winner to prevent further play
    if (this.hasWinner()) { return of([]); }
    this.turnCount++;

    //uses the turn count to switch between X's and O's
    if (this.playerOneMark == 'x') { return of(this.turnCount % 2 == 0 ? 'x' : 'o'); }
    else { return of(this.turnCount % 2 == 0 ? 'o' : 'x'); }
  }

  //sets the new location for the randomly-generated mine
  setMineLoc() : void {
    //removes the previously placed mine
    for (let i = 0; i < this.mineLoc.length; i++) { this.mineLoc[i] = false; }

    //randomly generates a new mine location
    const loc = Math.floor(Math.random() * 8);

    //updates the arrays of mine and mark locations to reflect new mine location
    this.mineLoc[loc] = true;
    this.updateGrid(loc, '');
  }

  //resets game data when navigating away from a game
  clearGame() : void {
    for (let i = 0; i < this.grid.length; i++) { this.updateGrid(i, ''); this.mineLoc[i] = false; }
    this.turnCount = -1;
    this.playerOneMark = '';
    this.playerTwoMark = '';
    this.winner = '';
  }

  //sets the name of the winner and assigns the mine hit stats to the proper player
  setWinner() {
    this.winner = this.turnCount % 2 == 0 ? this.playerOne : this.playerTwo;
    if (this.playerOneMark == 'x')
      { this.p1MineHitCount = '' + this.xMineHitCount; this.p2MineHitCount = '' + this.oMineHitCount;}
    else
      { this.p1MineHitCount = '' + this.oMineHitCount; this.p2MineHitCount = '' + this.xMineHitCount; }
  }

  //compiles the game statistics data into a FormData object for the backend to update the database
  compileData() : FormData {
    let data: FormData = new FormData();
    data.append('p1_name', this.playerOne);
    data.append('p2_name', this.playerTwo);
    data.append('winner', this.winner);
    data.append('p1_mines', this.p1MineHitCount);
    data.append('p2_mines', this.p2MineHitCount);
    data.append('turns', '' + this.turnCount);
    return data;
  }

  //saves the game statistics data to the database
  setGames() {
    this.dataService.setGames(this.compileData()).subscribe();
  }

}
