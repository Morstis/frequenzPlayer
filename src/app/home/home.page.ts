import { Component, OnInit } from '@angular/core';
import { Player } from '../_interfaces/player';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  players: Array<Player>;
  saveable = 0;
  ngOnInit(): void {
    this.players = this.load();
  }
  save() {
    localStorage.setItem('player', JSON.stringify(this.players));
    alert('saved!');
  }
  getValues(values: Player, objectIndex) {
    this.players[objectIndex].freq = values.freq;
    this.players[objectIndex].time = values.time;
    this.saveable++;
  }
  load(): Player[] {
    return JSON.parse(localStorage.getItem('player')) || [{}];
  }
}
