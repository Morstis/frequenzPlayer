import { Component, OnInit } from '@angular/core';
import { PlayerFormGroup } from '../_interfaces/player';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'alertTemplate',
  templateUrl: 'alertTemplate.html'
})
export class AlertTemplateComponent {}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  players: Array<PlayerFormGroup>;
  playingPlayers: Array<PlayerFormGroup> = [{} as any];
  saveable = 0;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.players = this.load();
  }
  save() {
    localStorage.setItem('player', JSON.stringify(this.playingPlayers));
    const ref = this.dialog.open(AlertTemplateComponent);
  }
  getValues(values: PlayerFormGroup, objectIndex) {
    this.playingPlayers[objectIndex] = values;
    this.saveable++;
  }
  load(): PlayerFormGroup[] {
    return JSON.parse(localStorage.getItem('player')) || [{} as any];
  }
  Push(val) {
    this.players.push(val);
    this.playingPlayers.push(val);
  }
  Pop() {
    this.players.pop();
    this.playingPlayers.pop();
  }
}
