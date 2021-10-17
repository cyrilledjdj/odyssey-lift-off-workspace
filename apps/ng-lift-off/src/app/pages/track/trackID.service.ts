import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      durationInSeconds
      modulesCount
      numberOfViews
      modules {
        id
        title
        durationInSeconds
      }
      description
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class TrackIDInfoService extends Query<Response> {
  document = GET_TRACK;
}
