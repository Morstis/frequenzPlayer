import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PlayerFormGroup } from 'src/app/_interfaces/player';
import { Sound } from 'src/app/_class/sound';
import { FormGroup, FormControl } from '@angular/forms';
import { CommunicationService } from 'src/app/_services/communication.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Output() started: EventEmitter<PlayerFormGroup>;
  @Input() input?: PlayerFormGroup;

  mute = false;
  private AudioContext =
    (window as any).AudioContext || (window as any).webkitAudioContext || false;
  private audioCtx: AudioContext;
  private player: Sound;
  volume = 1;
  playable = true;
  playerForm: FormGroup;
  constructor(private commServ: CommunicationService) {
    this.playerForm = new FormGroup({
      freq: new FormGroup({
        minFreq: new FormControl(''),
        maxFreq: new FormControl('')
      }),
      badFreq: new FormGroup({
        minBadFreq: new FormControl(''),
        maxBadFreq: new FormControl('')
      }),
      dur: new FormGroup({
        minDur: new FormControl(''),
        maxDur: new FormControl('')
      })
    });

    this.started = new EventEmitter<PlayerFormGroup>();
  }
  ngOnInit() {
    if (this.AudioContext) {
      this.audioCtx = new this.AudioContext();
    } else {
      alert(
        'Diese App wird nicht von deinem Browser nterstützt. Bitte verwende Chrome oder update deinen Browser.'
      );
    }

    this.playerForm.patchValue(this.input);
  }
  start(val: PlayerFormGroup) {
    if (this.player) {
      this.player.resume(this.volume);
    } else {
      this.player = new Sound(this.audioCtx);
      this.player.setVolume(this.volume);
      this.player.loop(Object.values(val.freq), Object.values(val.badFreq), Object.values(val.dur));
    }
    this.started.emit(val);
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
