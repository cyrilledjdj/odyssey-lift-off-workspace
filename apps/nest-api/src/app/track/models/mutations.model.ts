import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Track } from './track.model';

@ObjectType({
  description: 'A type returned by our mutation queries',
})
export class IncrementTrackViewsResponse {
  @Field((type) => Int)
  code?: number;

  @Field({ description: "The Module's title" })
  success?: boolean;

  @Field({
    description: 'Human-readable message for the UI',
  })
  message?: string;

  @Field({
    nullable: true,
    description: 'Newly updated track after a successful mutation',
  })
  track?: Track;
}
