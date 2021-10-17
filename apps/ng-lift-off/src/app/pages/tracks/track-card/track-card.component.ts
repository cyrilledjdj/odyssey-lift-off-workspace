import { Component, HostBinding, Input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { humanReadableTimeFromSeconds } from '@odyssey-lift-off-workspace/utils';

const INCREMENT_TRACK_VIEWS = gql`
  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        id
        numberOfViews
        title
      }
    }
  }
`;

@Component({
  selector: 'ng-lift-off-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss'],
})
export class TrackCardComponent {
  get id() {
    return this.track?.id;
  }
  get thumbnail() {
    return this.track?.thumbnail;
  }
  get title() {
    return this.track?.title;
  }
  get author() {
    return this.track?.author;
  }
  get modules() {
    return this.track?.modules;
  }
  get modulesCount() {
    return this.track?.modulesCount;
  }
  get humanReadableTimeFromSeconds() {
    return  humanReadableTimeFromSeconds(this.track?.durationInSeconds);
  }
  @Input() track: any;

  constructor(private apollo: Apollo) {}

  incrementTrackViews(_: Event, incrementTrackViewsId: number) {
    this.apollo
      .mutate({
        mutation: INCREMENT_TRACK_VIEWS,
        variables: { incrementTrackViewsId },
        onQueryUpdated: (data) => {
          console.log('ng-lift-off', data);
        },
      })
      .subscribe();
  }
}
