import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "Query  to get tracks array for the homepage grid"
    getTracks: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track{
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
  }

  type Author{
    id: ID!
    "Author's first and last name"
    name: String!
    "Author;s profile picture url"
    photo: String
  }
`;

export default typeDefs;
