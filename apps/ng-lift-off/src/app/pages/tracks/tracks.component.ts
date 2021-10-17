import { Component, OnInit } from '@angular/core';
import { TracksService } from './tracks.service';

@Component({
  selector: 'ng-lift-off-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  public loading = true;
  public data: any[] = [];
  public error: any;

  constructor(private allTracksGQL: TracksService) {}

  ngOnInit(): void {
    this.allTracksGQL
      .watch()
      .valueChanges.subscribe(({ loading, error, data }) => {
        this.data = (data as any)?.getTracks || [];
        this.loading = loading;
        this.error = error;
      });
  }
}
