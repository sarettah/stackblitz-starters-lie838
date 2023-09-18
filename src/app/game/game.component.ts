import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/game.model';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  rounds: Game[] = [];

  constructor(
    private leagueService: LeagueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let team = 0;
    this.route.params.subscribe((data) => {
      team = data['id'];
    });

    this.leagueService.getGames(team as number).subscribe((data) => {
      this.rounds = data;
    });
  }
}
