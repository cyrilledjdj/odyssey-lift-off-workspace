import { Module } from '@nestjs/common';
import { MutationsResolver } from './mutation.resolver';
import { TracksResolver } from './query.resolver';
import { TrackService } from './track.service';
import { TrackResolver } from './tracks.resolver';

@Module({
  exports: [TrackService],
  providers: [TrackResolver, TracksResolver, MutationsResolver, TrackService],
})
export class TrackModule {}
