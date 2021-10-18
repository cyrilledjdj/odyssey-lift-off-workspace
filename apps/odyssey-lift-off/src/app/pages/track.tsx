import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

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

const Track = () => {
  const { trackId } = useParams() as any;
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  return (
    <Layout fullWidth grid>
      <QueryResult data={data} error={error} loading={loading}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
export default Track;
