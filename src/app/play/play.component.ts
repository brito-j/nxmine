import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  boxShadowStyle: string = '0 0.125rem 0 0 #485969';

  borderStyle: string = '1px solid #485969';

  markBoxes: string[] = ['ex1', 'oh1', 'ex2', 'oh2'];

  showGrid: boolean = false;

  showMarkSelection: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  selectMark(markBox: number) {
    for (let i = 0; i < this.markBoxes.length; i++) {
      document.getElementById(this.markBoxes[i]).removeAttribute('style');
    }

    switch (markBox) {
      case 0:
        document.getElementById('ex1').style.boxShadow = this.boxShadowStyle;
        document.getElementById('ex1').style.border = this.borderStyle;
        document.getElementById('oh2').style.boxShadow = this.boxShadowStyle;
        document.getElementById('oh2').style.border = this.borderStyle;
        break;
      case 1:
        document.getElementById('oh1').style.boxShadow = this.boxShadowStyle;
        document.getElementById('oh1').style.border = this.borderStyle;
        document.getElementById('ex2').style.boxShadow = this.boxShadowStyle;
        document.getElementById('ex2').style.border = this.borderStyle;
        break;
      case 2:
        document.getElementById('ex2').style.boxShadow = this.boxShadowStyle;
        document.getElementById('ex2').style.border = this.borderStyle;
        document.getElementById('oh1').style.boxShadow = this.boxShadowStyle;
        document.getElementById('oh1').style.border = this.borderStyle;
        break;
      case 3:
        document.getElementById('oh2').style.boxShadow = this.boxShadowStyle;
        document.getElementById('oh2').style.border = this.borderStyle;
        document.getElementById('ex1').style.boxShadow = this.boxShadowStyle;
        document.getElementById('ex1').style.border = this.borderStyle;
    }
  }

  startGame() {
    this.showMarkSelection = false;
    this.showGrid = true;
  }

}
