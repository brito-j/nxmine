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

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  @Input('loc') loc: number;

  setMark(mark: string) {
    this.gameService.updateGrid(this.loc, mark);
    switch (mark) {
      case 'x' : { this.isX = true; break; }
      case 'o' : { this.isO = true; break; }
    }
  }

  setMine() { this.isMine = true; this.isX = false; this.isO = false; }


}
