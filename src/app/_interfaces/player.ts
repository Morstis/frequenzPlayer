export interface PlayerFormGroup {
  freq: {
    minFreq: number;
    maxFreq: number;
  };
  badFreq: {
    minBadFreq: number;
    maxBadFreq: number;
  };
  dur: {
    minDur: number;
    maxDur: number;
  };
}
