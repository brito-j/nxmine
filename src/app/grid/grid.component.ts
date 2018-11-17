import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cellLoc: string[] = [ "A1", "B1", "C1", "A2", "B2", "C2", "A3", "B3", "C3"];
}
