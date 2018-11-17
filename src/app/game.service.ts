import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  grid: string[] = ['', '', '', '', '', '', '', '', ''];

  updateGrid(loc: number, val: string) { this.grid[loc] = val; console.log(this.grid);}
}
