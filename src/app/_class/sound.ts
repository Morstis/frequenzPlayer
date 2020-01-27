export class Sound {
  private context: AudioContext;
  private oscillator: OscillatorNode;
  private gainNode: GainNode;
  private stopped = false;
  private time = 0;
  constructor(context) {
    this.context = context;
    this.init();
  }

  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
    this.oscillator.connect(this.gainNode);
    this.oscillator.type = 'sine';
  }

  stop() {
    this.stopped = true;
    this.gainNode.gain.value = 0;
  }
  resume(volume: number) {
    this.gainNode.gain.value = volume;
  }
  loop(freqRange: number[], badFreqRange: number[], timeRange: number[]) {
    let i = 0;
    setInterval(() => {
      if (this.stopped) {
        return;
      }
      const toneLenght = this.random(timeRange[0], timeRange[1]);
      this.time += toneLenght;
      this.oscillator.frequency.setValueAtTime(this.getFreq(freqRange, badFreqRange), this.time);
      i++;
    }, 1);

    this.oscillator.start();
  }
  setVolume(volume: number) {
    this.gainNode.gain.value = volume;
  }
  private random(min, max) {
    return Math.random() * (max - min) + min;
  }
  private getFreq(freqRange: number[], badFreqRange: number[]) {
    let possibleFreq = this.random(freqRange[0], freqRange[1]);
    while (badFreqRange[0] < possibleFreq && badFreqRange[1] > possibleFreq) {
      possibleFreq = this.random(freqRange[0], freqRange[1]);
    }

    return possibleFreq;
  }
}
