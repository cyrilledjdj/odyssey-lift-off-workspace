import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'ng-lift-off-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  public loading = true;
  public data: any[] = [];
  public error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          query TracksQuery {
            getTracks {
              id
              title
              author {
                photo
                id
                name
              }
              thumbnail
              durationInSeconds
              modulesCount
            }
          }
        `,
      })
      .valueChanges.subscribe(({ loading, error, data }) => {
        this.data = (data as any)?.getTracks || [];
        this.loading = loading;
        this.error = error;
      });
  }
}
