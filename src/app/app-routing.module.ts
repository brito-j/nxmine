import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GameComponent} from './game/game.component';
import {GameStartComponent} from './game-start/game-start.component';
import {HomeComponent} from './home/home.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {HowToPlayComponent} from './how-to-play/how-to-play.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'play', component: GameStartComponent},
  {path: 'game', component: GameComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'how-to-play', component: HowToPlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
