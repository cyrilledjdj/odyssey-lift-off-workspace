import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Author } from './author.model';
import { Module } from './module.model';

@ObjectType({
  description:
    'A track is a group of Modules that teaches about a specific topic',
})
export class Track {
  @Field((type) => ID)
  id?: string;

  @Field({ description: "Track's title" })
  title?: string;

  @Field((type) => Author, { description: "Track's main Author" })
  author?: Author;

  @Field({
    nullable: true,
    description:
      "Track's URL to main illustration to display in track card or track page",
  })
  thumbnail?: string;

  @Field((type) => Int, {
    deprecationReason: 'Use durationInSeconds instead',
    nullable: true,
    description: "Track's approximate length to complete, in seconds",
  })
  length?: number;

  @Field((type) => Int, {
    nullable: true,
    description: "Track's duration in seconds",
  })
  durationInSeconds?: number;

  @Field((type) => Int, {
    nullable: true,
    description: 'Number of modules the Track contains',
  })
  modulesCount?: number;

  @Field({
    nullable: true,
    description: "The track's complete description, can be in Markdown format",
  })
  description?: string;

  @Field((type) => Int, {
    nullable: true,
    description: 'The number of times a track has been viewed',
  })
  numberOfViews?: number;

  @Field((type) => [Module], {
    description: "The track's complete array of Modules",
  })
  modules?: Module[];
}
