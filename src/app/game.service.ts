import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private dataService: DataService) {
  }

  grid: string[] = ['', '', '', '', '', '', '', '', ''];

  turnCount: number = -1;

  mineLoc: boolean[] = [false, false, false, false, false, false, false, false, false];

  playerOne: string = 'Player One';

  playerTwo: string = 'Player Two';

  playerOneMark: string = '';

  playerTwoMark: string = '';

  xMineHitCount: number = 0;

  oMineHitCount: number = 0;

  p1MineHitCount: string = '';

  p2MineHitCount: string = '';

  winner: string = '';

  updateGrid(loc: number, val: string) {
    this.grid[loc] = val;
  }

  hasWinner() {
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

  turnMark(): Observable<any> {
    if (this.hasWinner()) { return of([]); }
    this.turnCount++;
    if (this.playerOneMark == 'x') { return of(this.turnCount % 2 == 0 ? 'x' : 'o'); }
    else { return of(this.turnCount % 2 == 0 ? 'o' : 'x'); }
  }

  setMineLoc() {
    for (let i = 0; i < this.mineLoc.length; i++) {
      this.mineLoc[i] = false;
    }
    const loc = Math.floor(Math.random() * 8);
    this.mineLoc[loc] = true;
    this.updateGrid(loc, '');
  }

  clearGame() {
    for (let i = 0; i < this.grid.length; i++) {
      this.updateGrid(i, '');
      this.mineLoc[i] = false;
    }
    this.turnCount = -1;
    this.playerOneMark = '';
    this.playerTwoMark = '';
    this.winner = '';
  }

  setWinner() {
    this.winner = this.turnCount % 2 == 0 ? this.playerOne : this.playerTwo;
    if (this.playerOneMark == 'x') {
      this.p1MineHitCount = '' + this.xMineHitCount;
      this.p2MineHitCount = '' + this.oMineHitCount;
    } else {
      this.p1MineHitCount = '' + this.oMineHitCount;
      this.p2MineHitCount = '' + this.xMineHitCount;
    }
    this.compileData();
  }

  compileData() {
    let data: FormData = new FormData();
    data.append('p1_name', this.playerOne);
    data.append('p2_name', this.playerTwo);
    data.append('winner', this.winner);
    data.append('p1_mines', this.p1MineHitCount);
    data.append('p2_mines', this.p2MineHitCount);
    data.append('turns', '' + this.turnCount);
    return data;
  }

  setGames() {
    this.dataService.setGames(this.compileData()).subscribe();
  }

}
