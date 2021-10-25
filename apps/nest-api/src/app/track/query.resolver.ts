import { Args, Context, ID, Query, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { Module } from './models/module.model';
import { Track } from './models/track.model';

@Resolver({})
export class TracksResolver {

  @Query((returns) => [Track], {
    description: 'Query  to get tracks array for the homepage grid',
  })
  async getTracks(@Context() { dataSources }) {
    return dataSources.trackAPI.getTracks();
  }

  @Query((returns) => Track, {
    nullable: true,
    description: 'Query to get a track by id',
  })
  async track(
    @Args({ name: 'trackId', type: () => ID }) trackId: string,
    @Context() { dataSources }
  ) {
    return dataSources.trackAPI.getTrack(trackId);
  }

  @Query((returns) => Author, {
    nullable: true,
    description: 'Query to get an author by id',
  })
  async author(
    @Args({ name: 'authorId', type: () => ID }) authorId: string,
    @Context() { dataSources }
  ) {
    return dataSources.trackAPI.getAuthor(authorId);
  }

  @Query((returns) => Module, {
    nullable: true,
    description: 'Query to get a module by id',
  })
  async module(
    @Args({ name: 'moduleId', type: () => ID }) moduleId: string,
    @Context() { dataSources }
  ) {
    return dataSources.trackAPI.getModule(moduleId);
  }
}
