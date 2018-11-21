import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CellComponent } from './cell/cell.component';
import { GameStartComponent } from './game-start/game-start.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CellComponent,
    GameStartComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
