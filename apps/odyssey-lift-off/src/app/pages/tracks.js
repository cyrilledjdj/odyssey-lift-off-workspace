import React from 'react';
import { Layout } from '../components';
import { gql } from '@apollo/client';

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
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
