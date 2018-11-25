import {Component, Input, OnChanges} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnChanges {

  isX: boolean = false;
  isO: boolean = false;
  isMine: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnChanges() {
    if (this.mine && this.isMarked()) {
      if (this.isX) { this.gameService.xMineHitCount++; }
      else { this.gameService.oMineHitCount++; }
      this.clearMark();
      this.isMine = true;
      this.gameService.updateGrid(this.loc, '');
    }
  }

  @Input('loc') loc: number;
  @Input('mine') mine: boolean;

  setMark(mark: string) {
    if (this.isMarked() || this.gameService.hasWinner()) { return; }
    if (this.mine && !this.isMine) { this.isMine = true; return; }
    if (this.isMine) { this.clearMark(); }
    switch (mark) { case 'x' : { this.isX = true; break; } case 'o' : { this.isO = true; break; } }
    this.gameService.updateGrid(this.loc, mark);
    this.gameService.setMineLoc();
  }

  getTurnMark() {
    if (this.isMarked()) { return ''; }
    let turnMark: string = '';
    this.gameService.turnMark().subscribe(mark => turnMark = mark);
    return turnMark;
  }

  clearMark() { this.isX = false; this.isO = false; this.isMine = false; }

  isMarked() { return this.isX || this.isO; }

  setClass() {
    return this.gameService.hasWinner().length && this.gameService.hasWinner().includes('' + this.loc)
      ? "icon is-success" : "icon";
  }
}
