import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { Module } from './models/module.model';
import { Track } from './models/track.model';
import { TrackService } from './track.service';

@Resolver((of) => Track)
export class TrackResolver {
  constructor(private trackService: TrackService) {}

  @ResolveField('author', (returns) => Author)
  async author(@Parent() { id }: Author) {
    return this.trackService.getAuthor(id);
  }

  @ResolveField('modules', (returns) => [Module])
  async modules(@Parent() { id }: Module) {
    return this.trackService.getTrackModules(id);
  }

  @ResolveField()
  async durationInSeconds(@Parent() { length }: Track) {
    return length;
  }
}
