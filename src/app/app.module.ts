import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { GameComponent } from './game/game.component';
import { LeagueComponent } from './league/league.component';
import { Intercept } from './services/intercept.service';
import { LeagueService } from './services/league.service';

let routes: Routes = [
  { path: '', component: LeagueComponent },
  { path: 'league/:state/:league', component: LeagueComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent, BarComponent, LeagueComponent, GameComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ], 
  providers: [
    LeagueService,
    { provide: HTTP_INTERCEPTORS, useClass: Intercept, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
