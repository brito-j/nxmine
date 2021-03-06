import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GridComponent} from './grid/grid.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CellComponent} from './cell/cell.component';
import {GameStartComponent} from './game-start/game-start.component';
import {NavComponent} from './nav/nav.component';
import {GameInfoComponent} from './game-info/game-info.component';
import {GameComponent} from './game/game.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {StatisticsComponent} from './statistics/statistics.component';
import {HttpClientModule} from '@angular/common/http';
import {HowToPlayComponent} from './how-to-play/how-to-play.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CellComponent,
    GameStartComponent,
    NavComponent,
    GameInfoComponent,
    GameComponent,
    HomeComponent,
    StatisticsComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
