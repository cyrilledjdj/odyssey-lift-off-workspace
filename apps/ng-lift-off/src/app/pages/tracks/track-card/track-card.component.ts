import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-lift-off-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss'],
})
export class TrackCardComponent implements OnInit {
  get id() {
    return this.track?.id;
  }
  get thumbnail() {
    return this.track?.thumbnail;
  }
  get title() {
    return this.track?.title;
  }
  get author() {
    return this.track?.author;
  }
  get modules() {
    return this.track?.modules;
  }
  get modulesCount() {
    return this.track?.modulesCount;
  }
  get durationInSeconds() {
    return this.track?.durationInSeconds;
  }
  @Input() track: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.track;
  }

  incrementTrackViews(event: Event) {
    console.log(32);
  }

  humanReadableTimeFromSeconds(val: number) {
    return 0;
  }
}
