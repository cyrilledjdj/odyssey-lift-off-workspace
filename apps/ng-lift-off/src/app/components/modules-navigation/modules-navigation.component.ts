import { Component, Input } from '@angular/core';
import { humanReadableTimeFromSeconds } from '@odyssey-lift-off-workspace/utils';

@Component({
  selector: 'ng-lift-off-modules-navigation',
  templateUrl: './modules-navigation.component.html',
  styleUrls: ['./modules-navigation.component.scss'],
})
export class ModulesNavigationComponent {
  @Input() track: any;
  @Input() module: any;
  hovered: any = false;

  formatDuration = humanReadableTimeFromSeconds;
}
