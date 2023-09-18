import { Team } from './team.model';

export class Game {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  constructor(obj: Game) {
    this.fixture = obj.fixture;
    this.league = obj.league;
    this.teams = obj.teams;
    this.goals = obj.goals;
  }
}

export class Fixture {
  constructor(public id: number, public date: Date) {}
}
export class League {
  constructor(public id: number, public country: string) {}
}
export class Teams {
  constructor(public home: Team, public away: Team) {}
}
export class Goals {
  constructor(public home: number, public away: number) {}
}
