import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { TrackIDInfoService } from './trackID.service';

@Component({
  selector: 'ng-lift-off-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  public loading = true;
  public data: any = [];
  public error: any;

  public refresher: any;

  constructor(
    private trackIdGQL: TrackIDInfoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ trackId }) => {
      if (trackId) {
        this.refresher = this.trackIdGQL.watch({ trackId });
        this.trackIdGQL
          .watch({ trackId })
          .valueChanges.subscribe(({ loading, error, data }) => {
            this.loading = loading;
            this.error = error;
            this.data = (data as any)?.track;
          });
      }
    });
  }
}
