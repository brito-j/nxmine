import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  isX: boolean = false;
  isO: boolean = false;
  isMine: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @Input('loc') loc: string;

  setMark(mark: string) {
    console.log(this.loc);
    switch (mark) {
      case 'x' : { this.isX = true; break; }
      case 'o' : { this.isO = true; break; }
    }
  }

  setMine() { this.isMine = true; this.isX = false; this.isO = false; }


}
