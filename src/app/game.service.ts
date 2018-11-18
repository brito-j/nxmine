import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  grid: string[] = ['', '', '', '', '', '', '', '', ''];

  turnCount: number = 0;

  updateGrid(loc: number, val: string) { this.grid[loc] = val; }

  hasWinner() {
    return (this.grid[0] == this.grid[1] && this.grid[1] == this.grid[2] && this.grid[1].length) ||
           (this.grid[3] == this.grid[4] && this.grid[4] == this.grid[5] && this.grid[4].length) ||
           (this.grid[6] == this.grid[7] && this.grid[7] == this.grid[8] && this.grid[7].length) ||
           (this.grid[0] == this.grid[3] && this.grid[3] == this.grid[6] && this.grid[3].length) ||
           (this.grid[1] == this.grid[4] && this.grid[4] == this.grid[7] && this.grid[4].length) ||
           (this.grid[2] == this.grid[5] && this.grid[5] == this.grid[8] && this.grid[5].length) ||
           (this.grid[0] == this.grid[4] && this.grid[4] == this.grid[8] && this.grid[4].length) ||
           (this.grid[2] == this.grid[4] && this.grid[4] == this.grid[6] && this.grid[4].length);
  }

  turnMark(): Observable<any> { this.turnCount++; return of(this.turnCount % 2 == 0 ? 'x' : 'o'); }
}
