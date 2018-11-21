import { Component } from '@angular/core';
import {GameService} from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BURNOUT';

  constructor(private gameService: GameService) {}

  getCurrentTurn() { return this.gameService.turnCount % 2; }
}
