import {Component} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  constructor(private gameService: GameService) {
  }

  //returns if a cell location has a mine or not
  getMineLoc(index: number): boolean { return this.gameService.mineLoc[index]; }
}
