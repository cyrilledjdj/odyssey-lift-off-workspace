import { Args, Context, ID, Mutation, Resolver } from '@nestjs/graphql';
import { IncrementTrackViewsResponse } from './models/mutations.model';

@Resolver()
export class MutationsResolver {
  @Mutation((returns) => IncrementTrackViewsResponse)
  async incrementTrackViews(
    @Args({ name: 'trackId', type: () => ID }) trackId: string,

    @Context() { dataSources }
  ) {
    return dataSources.trackAPI.incrementTrackViews(trackId);
  }
}
