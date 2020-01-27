import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-find-freq',
  templateUrl: './find-freq.component.html',
  styleUrls: ['./find-freq.component.scss']
})
export class FindFreqComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // create a synth and connect it to the master output (your speakers)
    const bell = new Tone.PolySynth().toMaster();

    // play a middle 'C' for the duration of an 8th note
    const loop = new Tone.Loop(time => {
      console.log(time);
      bell.triggerAttackRelease(Math.random() * (800 - 400) + 400, 1);
    }, '8n').start(0);
    Tone.Transport.start();
  }
}
