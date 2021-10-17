import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export const TRACKS = gql`
  query TracksQuery {
    getTracks {
      id
      title
      author {
        photo
        id
        name
      }
      thumbnail
      durationInSeconds
      modulesCount
    }
  }
`;

export interface Track {
  title: string;
  thumbnail: string;
  author: string;
  durationInSeconds: number;
  modulesCount: number;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class TracksService extends Query<Response> {
  document = TRACKS;
}
