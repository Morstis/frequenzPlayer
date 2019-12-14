import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Player } from 'src/app/_interfaces/player';
import { Sound } from 'src/app/_class/sound';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Output() started: EventEmitter<Player>;
  @Input() input?: Player;
  mute = false;
  private AudioContext =
    (window as any).AudioContext || (window as any).webkitAudioContext || false;
  private audioCtx: AudioContext;
  private player: Sound;
  volume = 1;
  playerData: Player = { freq: [], time: [] };
  playable = true;
  constructor() {
    this.started = new EventEmitter<Player>();
  }
  ngOnInit() {
    if (this.AudioContext) {
      this.audioCtx = new this.AudioContext();
    } else {
      alert(
        'Diese App wird nicht von deinem Browser nterstützt. Bitte verwende Chrome oder update deinen Browser.'
      );
    }
    if (this.input.freq && this.input.time !== undefined) {
      this.playerData = this.input;
    }
  }

  start(val) {
    console.log(val);

    this.playerData.freq[0] = val.freq1;
    this.playerData.freq[1] = val.freq2;
    this.playerData.time[0] = val.time1;
    this.playerData.time[1] = val.time2;
    this.started.emit(this.playerData);
    this.play();
  }
  play() {
    if (this.player) {
      this.player.resume(this.volume);
    } else {
      this.player = new Sound(this.audioCtx);
      this.player.setVolume(this.volume);
      console.log(this.playerData.freq, this.playerData.time);

      this.player.loop(this.playerData.freq, this.playerData.time);
    }
  }
  stop() {
    this.player.stop();
  }
  speeker(value) {
    if (this.player && !this.playable) {
      this.player.setVolume(value);
    }
    this.volume = value;
  }
}
