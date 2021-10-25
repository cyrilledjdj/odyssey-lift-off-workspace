import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'An author is the creator of a track' })
export class Author {
  @Field((type) => ID)
  id?: string;

  @Field({ description: "Author's first and last name" })
  name?: string;

  @Field({ nullable: true, description: "Author's profile picture url" })
  photo?: string;
}
