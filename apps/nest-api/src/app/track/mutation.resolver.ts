import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { IncrementTrackViewsResponse } from './models/mutations.model';
import { TrackService } from './track.service';

@Resolver()
export class MutationsResolver {
  constructor(private readonly trackService: TrackService) {}
  @Mutation((returns) => IncrementTrackViewsResponse)
  async incrementTrackViews(
    @Args({ name: 'id', type: () => ID }) trackId: string
  ) {
    try {
      const track = await this.trackService.incrementTrackViews(trackId);
      return {
        code: 200,
        success: true,
        message: `Track views incremented successfully for ${trackId}`,
        track,
      };
    } catch (error) {
      return {
        code: error.extensions.response.status,
        success: false,
        message: `Error incrementing track views for ${trackId}\n
        ${error.extensions.response.body}`,
        track: null,
      };
    }
  }
}
