import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { PlayerFormGroup } from '../_interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  darkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    JSON.parse(localStorage.getItem('darkTheme'))
  );
}
