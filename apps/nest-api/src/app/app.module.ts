import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'odyssey-lift-off'),
      },
      {
        rootPath: join(__dirname, '..', 'ng-lift-off'),
        serveRoot: '/ng',
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
