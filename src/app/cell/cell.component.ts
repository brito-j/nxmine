import {Component, Input, OnChanges} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnChanges {

  //switches to show X, O, or a mine if isX, isO, or isMine is true, respectively
  isX: boolean = false;
  isO: boolean = false;
  isMine: boolean = false;

  constructor(private gameService: GameService) {
  }

  //updates location to reflect mine placement
  //updates mine hit counts for X and O
  ngOnChanges() {
    if (this.mine && this.isMarked()) {
      if (this.isX) { this.gameService.xMineHitCount++; } else { this.gameService.oMineHitCount++; }
      this.clearMark();
      this.isMine = true;
      this.gameService.updateGrid(this.loc, '');
    }
  }

  //uses Input variables to see changes immediately with ngOnChanges()
  @Input('loc') loc: number;
  @Input('mine') mine: boolean;

  //sets the mark to be shown in the cell
  setMark(mark: string) : void {
    //prevents further play if the cell is already marked or the game already has a winner
    if (this.isMarked() || this.gameService.hasWinner()) { return; }

    //shows the mine if the current location is a mine and returns to prevent double-dipping
    if (this.mine && !this.isMine) { this.isMine = true; return; }

    //clears mine, places mark, updates the grid to reflect new mark, and sets the next mine location
    if (this.isMine) { this.clearMark(); }
    switch (mark) { case 'x' : { this.isX = true; break; } case 'o' : { this.isO = true; } }
    this.gameService.updateGrid(this.loc, mark);
    this.gameService.setMineLoc();
  }

  //gets the mark to be placed continuously via subscription
  getTurnMark() : string {
    let turnMark: string = '';
    this.gameService.turnMark().subscribe(mark => turnMark = mark);
    return turnMark;
  }

  //clears the location of any mark
  clearMark() { this.isX = false; this.isO = false; this.isMine = false; }

  //checks if the location is marked by a player
  isMarked() { return this.isX || this.isO; }

  //sets the class of the X and O icons to be colored green if the cell is one of the three winning marks
  setClass() {
    return this.gameService.hasWinner().length
      && this.gameService.hasWinner().includes('' + this.loc) ? 'icon is-success' : 'icon';
  }
}
