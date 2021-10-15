import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-lift-off-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  public loading = false;
  public data = false;
  public error = false;

  constructor() {}

  ngOnInit(): void {}
}
