import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Standing } from '../models/standing.model';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css'],
})
export class LeagueComponent implements OnInit {
  state?: string;
  standings: Standing[] = [];
  leagueId = 0;

  constructor(
    private route: ActivatedRoute,
    private leagueService: LeagueService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.state = params?.state;
      this.leagueId = params?.league;
      if (this.state) this.initData();
    });
  }

  initData() {
    if (this.state) {
      this.leagueService
        .getStandings(this.leagueId, new Date().getFullYear())
        .subscribe((data) => {
          this.standings = data;
        });
    }
  }
}
