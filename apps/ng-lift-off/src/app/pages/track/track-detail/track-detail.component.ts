import { Component, Input } from '@angular/core';
import { humanReadableTimeFromSeconds } from '@odyssey-lift-off-workspace/utils';

@Component({
  selector: 'ng-lift-off-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss'],
})
export class TrackDetailComponent {
  @Input() track: any;

  get durationInSeconds() {
    return humanReadableTimeFromSeconds(this.track?.durationInSeconds);
  }

  format = humanReadableTimeFromSeconds;
}
