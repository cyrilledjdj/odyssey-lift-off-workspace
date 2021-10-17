import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-lift-off-md-content',
  templateUrl: './md-content.component.html',
  styleUrls: ['./md-content.component.scss'],
})
export class MdContentComponent {
  @Input() content: any;
}
