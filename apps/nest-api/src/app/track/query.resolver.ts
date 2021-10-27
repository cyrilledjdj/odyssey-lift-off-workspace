import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { Module } from './models/module.model';
import { Track } from './models/track.model';
import { TrackService } from './track.service';

@Resolver({})
export class TracksResolver {
  constructor(private readonly trackService: TrackService) {}

  @Query((returns) => [Track], {
    description: 'Query  to get tracks array for the homepage grid',
  })
  async getTracks() {
    return this.trackService.getTracks();
  }

  @Query((returns) => Track, {
    nullable: true,
    description: 'Query to get a track by id',
  })
  async track(@Args({ name: 'id', type: () => ID }) trackId: string) {
    return this.trackService.getTrack(trackId);
  }

  @Query((returns) => Author, {
    nullable: true,
    description: 'Query to get an author by id',
  })
  async author(@Args({ name: 'id', type: () => ID }) authorId: string) {
    return this.trackService.getAuthor(authorId);
  }

  @Query((returns) => Module, {
    nullable: true,
    description: 'Query to get a module by id',
  })
  async module(@Args({ name: 'id', type: () => ID }) moduleId: string) {
    return this.trackService.getModule(moduleId);
  }
}
