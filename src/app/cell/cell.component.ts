import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  isX: boolean = false;
  isO: boolean = false;
  isMine: boolean = false;

  turn: string = '';

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  @Input('loc') loc: number;

  setMark(mark: string) {
    if (this.gameService.hasWinner()) { return; }
    switch (mark) {
      case 'x' : { this.isX = true; break; }
      case 'o' : { this.isO = true; break; }
    }
    this.gameService.updateGrid(this.loc, mark);
  }

  setMine() { this.isMine = true; this.isX = false; this.isO = false; }

  getTurnMark() {
    if (this.isX || this.isO) { return ''; }
    this.gameService.turnMark().subscribe(mark => this.turn = mark);
    return this.turn;
  }
}
