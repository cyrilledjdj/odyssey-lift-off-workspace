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
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    " Track's title"
    title: String!
    "Tack's main Author"
    author: Author!
    "Track's URL to main illustration to display in track card or track page"
    thumbnail: String
    "Track's approximate length to complete, in minutes"
    length: Int
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
    "The Module's length in minutes"
    length: Int
  }
`;

export default typeDefs;
