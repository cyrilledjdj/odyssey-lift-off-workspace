import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-lift-off-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss'],
})
export class QueryResultComponent {
  @Input() loading = false;
  @Input() data: any;
  @Input() error: any;
}
