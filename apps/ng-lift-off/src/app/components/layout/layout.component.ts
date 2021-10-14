import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-lift-off-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() public fluid: boolean = false;
  @Input() public grid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
