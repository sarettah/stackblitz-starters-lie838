export class All {
  played: number;
  lose: number;
  win: number;
  draw: number;
  goalsDiff: number;
  points: number;

  constructor(
    played: number,
    lose: number,
    win: number,
    goalsDiff: number,
    points: number,
    draw: number
  ) {
    this.played = played;
    this.lose = lose;
    this.win = win;
    this.goalsDiff = goalsDiff;
    this.points = points;
    this.draw = draw;
  }
}
