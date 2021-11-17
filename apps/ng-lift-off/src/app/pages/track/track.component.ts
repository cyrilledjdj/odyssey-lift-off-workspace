import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { TrackIDInfoService } from './trackID.service';

@Component({
  selector: 'ng-lift-off-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit, OnDestroy {
  public loading = true;
  public data: any;
  public error: any;
  private tracksQuery: QueryRef<any> | undefined;
  private querySubscription: Subscription | undefined;

  public refresher: any;

  constructor(
    private trackIdGQL: TrackIDInfoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ trackId }) => {
      if (trackId) {
        this.tracksQuery = this.trackIdGQL.watch(
          { trackId },
          { pollInterval: 500 }
        );
        this.querySubscription = this.tracksQuery.valueChanges.subscribe(
          ({ loading, error, data }) => {
            this.loading = loading;
            this.error = error;
            this.data = data?.track;
          }
        );
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.querySubscription?.unsubscribe();
  }
}
