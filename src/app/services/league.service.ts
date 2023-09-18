import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Game } from '../models/game.model';
import { Response } from '../models/response.model';
import { Standing } from '../models/standing.model';

@Injectable()
export class LeagueService {
  urlBase = 'https://v3.football.api-sports.io';

  constructor(private http: HttpClient) {}

  getStandings(league: number, season: number): Observable<Standing[]> {
    let url = '/standings?league=' + league + '&season=' + season;

    return this.http.get<Response>(this.urlBase + url).pipe(
      map((res) => {
        return (res?.response[0]?.league?.standings[0] as Standing[]).map(
          (st) => new Standing(st)
        );
      })
    );
  }

  getGames(team: number): Observable<Game[]> {
    let url = '/fixtures?team=' + team + '&last=10';
    return this.http.get<Response>(this.urlBase + url).pipe(
      map((res) => {
        return (res.response as Game[]).map((res) => new Game(res));
      })
    );
  }
}
