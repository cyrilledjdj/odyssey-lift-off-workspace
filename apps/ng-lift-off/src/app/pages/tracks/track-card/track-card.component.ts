import { Component, Input } from '@angular/core';
import { humanReadableTimeFromSeconds } from '@odyssey-lift-off-workspace/utils';
import { TrackIdService } from '../track.service';

@Component({
  selector: 'ng-lift-off-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss'],
})
export class TrackCardComponent {
  get humanReadableTimeFromSeconds() {
    return humanReadableTimeFromSeconds(this.track?.durationInSeconds);
  }
  @Input() track: any;

  constructor(private trackIdGQL: TrackIdService) {}

  incrementTrackViews(_: Event, incrementTrackViewsId: number) {
    this.trackIdGQL
      .mutate({
        incrementTrackViewsId,
      })
      .subscribe();
  }
}
