import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDS_LEAGUE } from '../enums/id-league.enum';
import { ButtonBar } from '../models/buttonbar.model';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  buttons = [
    new ButtonBar('England', IDS_LEAGUE.ENGLAND),
    new ButtonBar('Spain', IDS_LEAGUE.SPAIN),
    new ButtonBar('Germany', IDS_LEAGUE.GERMANY),
    new ButtonBar('France', IDS_LEAGUE.FRANCE),
    new ButtonBar('Italy', IDS_LEAGUE.ITALY),
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  selectState(button: ButtonBar) {
    this.router.navigateByUrl('/league' + button.state + '/' + button.league);
  }
}
