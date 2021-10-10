import { Layout, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';

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
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult data={data} error={error} loading={loading}>
      {data?.getTracks?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
