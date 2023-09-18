import { All } from './all.model';
import { Team } from './team.model';

export class Standing {
  team: Team;
  all: All;
  goalsDiff: number;
  points: number;

  constructor(obj: Standing) {
    this.team = obj.team;
    this.all = obj.all;
    this.goalsDiff = obj.goalsDiff;
    this.points = obj.points;
  }
}
