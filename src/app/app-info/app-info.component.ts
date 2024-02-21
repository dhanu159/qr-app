import { Component, Input, VERSION, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInfoComponent {

  ngVersion = VERSION.full;

  @Input()
  hasDevices: boolean;

  @Input()
  hasPermission: boolean;

  stateToEmoji(state: boolean): string {
    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };

    return states[(('' + state) as keyof typeof states)]; // Type assertion (less preferred)
  }
    
  constructor() {
    this.hasPermission = false; // or true, depending on your default value
    this.hasDevices = false;
  }
}
