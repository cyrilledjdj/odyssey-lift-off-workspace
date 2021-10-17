import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

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

@Injectable({
  providedIn: 'root',
})
export class TrackIdService extends Mutation {
  document = INCREMENT_TRACK_VIEWS;
}
