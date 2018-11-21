import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() {
  }

  grid: string[] = ['', '', '', '', '', '', '', '', ''];

  turnCount: number = 0;

  mineLoc: boolean[] = [false, false, false, false, false, false, false, false, false];

  playerOne: string = '';

  playerTwo: string = '';

  updateGrid(loc: number, val: string) {
    this.grid[loc] = val;
  }

  hasWinner() {
    if (this.grid[0] == this.grid[1] && this.grid[1] == this.grid[2] && this.grid[1].length)
    { return "012" }
    else if (this.grid[3] == this.grid[4] && this.grid[4] == this.grid[5] && this.grid[4].length)
    { return "345" }
    else if (this.grid[6] == this.grid[7] && this.grid[7] == this.grid[8] && this.grid[7].length)
    { return "678" }
    else if (this.grid[0] == this.grid[3] && this.grid[3] == this.grid[6] && this.grid[3].length)
    { return "036" }
    else if (this.grid[1] == this.grid[4] && this.grid[4] == this.grid[7] && this.grid[4].length)
    { return "147" }
    else if (this.grid[2] == this.grid[5] && this.grid[5] == this.grid[8] && this.grid[5].length)
    { return "258" }
    else if (this.grid[0] == this.grid[4] && this.grid[4] == this.grid[8] && this.grid[4].length)
    { return "048" }
    else if (this.grid[2] == this.grid[4] && this.grid[4] == this.grid[6] && this.grid[4].length)
    { return "246" }
    else { return ""; }
  }

  turnMark(): Observable<any> {
    if (this.hasWinner()) { return of([]); }
    let isFirstTurn: boolean = true;
    for (let i = 0; i < this.grid.length; i++) { if (this.grid[i].length) { isFirstTurn = false; } }
    if (isFirstTurn && this.playerOne == 'x') { this.turnCount--; }
    this.turnCount++;
    console.log(this.turnCount);
    return of(this.turnCount % 2 == 0 ? 'x' : 'o');
  }

  setMineLoc() {
    for (let i = 0; i < 9; i++) {
      this.mineLoc[i] = false;
    }
    const loc = Math.floor(Math.random() * 8);
    this.mineLoc[loc] = true;
  }

}
