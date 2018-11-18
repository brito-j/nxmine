import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  getMineLoc(index: number): boolean { return this.gameService.mineLoc[index];
  }
}
