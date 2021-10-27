import { HttpModule, Module } from '@nestjs/common';
import { ModuleResolver } from './module.resolver';
import { MutationsResolver } from './mutation.resolver';
import { TracksResolver } from './query.resolver';
import { TrackService } from './track.service';
import { TrackResolver } from './tracks.resolver';

@Module({
  imports: [HttpModule],
  exports: [TrackService],
  providers: [
    TrackResolver,
    TracksResolver,
    ModuleResolver,
    MutationsResolver,
    TrackService,
  ],
})
export class TrackModule {}
