import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { Module } from './models/module.model';
import { Track } from './models/track.model';
import { TrackService } from './track.service';

@Resolver((of) => Track)
export class TrackResolver {

  @ResolveField('author', (returns) => Author)
  async author(@Parent() { id }: Author, @Context() {dataSources}) {
    return dataSources.trackAPI.getAuthor(id);
  }

  @ResolveField('modules', (returns) => [Module])
  async modules(@Parent() { id }: Module, @Context() {dataSources}) {
    return dataSources.trackAPI.getTrackModules(id);
  }

  @ResolveField()
  async durationInSeconds(@Parent() { length }: Track) {
    return length;
  }
}
