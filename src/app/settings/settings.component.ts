import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../_services/communication.service';
import { MatSlideToggleChange } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor(private commServ: CommunicationService) {}
  theme$: BehaviorSubject<boolean> = this.commServ.darkTheme$;

  changeTheme(value: MatSlideToggleChange) {
    this.commServ.darkTheme$.next(value.checked);
  }
}
