import { Component, OnInit } from '@angular/core';
import { ModuleByIdService } from './module.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-lift-off-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {
  public loading = true;
  public data: any;
  public error: any;

  constructor(
    private moduleByIdService: ModuleByIdService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.params.subscribe(({ moduleId, trackId }) => {
      this.moduleByIdService
        .watch({ moduleId, trackId })
        .valueChanges.subscribe(({ data, loading, error }) => {
          this.data = data;
          this.loading = loading;
          this.error = error;
        });
    });
  }
}
