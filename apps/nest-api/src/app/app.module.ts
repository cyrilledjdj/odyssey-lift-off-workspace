import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlConfigService } from './gqlconfig.service';
import { TrackModule } from './track/track.module';
@Module({
  imports: [
    TrackModule,
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'ng-lift-off'),
        serveRoot: '/ng',
      },
      {
        rootPath: join(__dirname, '..', 'odyssey-lift-off'),
      },
    ),
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
