import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export const GET_MODULE_AND_PARENT_TRACK = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        durationInSeconds
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ModuleByIdService extends Query<Response> {
  document = GET_MODULE_AND_PARENT_TRACK;
}
