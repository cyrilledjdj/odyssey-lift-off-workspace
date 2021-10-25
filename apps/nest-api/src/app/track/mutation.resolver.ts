import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { IncrementTrackViewsResponse } from './models/mutations.model';
import { TrackService } from './track.service';

@Resolver()
export class MutationsResolver {
  constructor(private trackService: TrackService) {}

  @Mutation((returns) => IncrementTrackViewsResponse)
  async incrementTrackViews(
    @Args({ name: 'trackId', type: () => ID }) trackId: string
  ) {
    return this.trackService.incrementTrackViews(trackId);
  }
}
