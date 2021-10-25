import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description:
    'A Module is a single unit of teaching. Multiple Modules compose a Track',
})
export class Module {
  @Field((type) => ID)
  id?: string;

  @Field({ description: "The Module's title" })
  title?: string;

  @Field((type) => Int, {
    nullable: true,
    description: "The Module's video duration in seconds",
  })
  durationInSeconds?: number;

  @Field({
    nullable: true,
    description:
      "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript",
  })
  content?: string;

  @Field({
    nullable: true,
    description: "The module's video url, for video-based modules",
  })
  videoUrl?: string;
}
