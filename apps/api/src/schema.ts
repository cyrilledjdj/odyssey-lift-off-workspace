import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "Query  to get tracks array for the homepage grid"
    getTracks: [Track!]!
    "Query to get a track by id"
    track(id: ID!): Track
    "Query to get an author by id"
    author(id: ID!): Author
    "Query to get a module by id"
    module(id: ID!): Module
  }
  "A Mutation query to update data in the database itself"
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }
  "A type returned by our mutation queries"
  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represent the status of the mutation"
    code: Int!
    "Indicateds whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    " Track's title"
    title: String!
    "Tack's main Author"
    author: Author!
    "Track's URL to main illustration to display in track card or track page"
    thumbnail: String
    "Track's approximate length to complete, in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds instead")
    "Track's duration in seconds"
    durationInSeconds: Int
    "Number of modules the Track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }
  "An author is the creator of a track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds instead")
    "The Module's video duration in seconds"
    durationInSeconds: Int
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String
    "The module's video url, for video-based modules"
    videoUrl: String
  }
`;

export default typeDefs;
