import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-lift-off-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss'],
})
export class ModuleDetailComponent implements OnInit {
  @Input() module: any;
  @Input() track: any;

  formatVideoUrl(videoUrl: string) {
    return videoUrl.replace('https://youtu.be/', '');
  }

  ngOnInit() {
    // Inject the logic for youtube video player
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
