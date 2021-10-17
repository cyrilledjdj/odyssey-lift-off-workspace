import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./pages/tracks/tracks.module').then((m) => m.TracksModule),
        },
        {
          path: 'track',
          loadChildren: () =>
            import('./pages/track/track.module').then((m) => m.TrackModule),
        },
        { path: '**', redirectTo: '/', pathMatch: 'full' },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
