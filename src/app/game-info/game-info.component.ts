import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnChanges {

  constructor() { }

  ngOnChanges() {
    this.switchPlayerHighlight();
  }

  @Input('turn') turn: number;

  switchPlayerHighlight() {
    switch (this.turn) {
      case 0:
        document.getElementById("player-one-box").style.outline = "3px dotted green";
        document.getElementById("player-two-box").removeAttribute('style');
        break;
      case 1:
        document.getElementById("player-two-box").style.outline = "3px dotted green";
        document.getElementById("player-one-box").removeAttribute('style');
    }
  }

}
