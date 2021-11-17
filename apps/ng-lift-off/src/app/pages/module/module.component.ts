import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModuleByIdService } from './module.service';
import { ActivatedRoute } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ng-lift-off-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit, OnDestroy {
  public loading = true;
  public data: any;
  public error: any;
  private viewsQuery: QueryRef<any> | undefined;
  private querySubscription: Subscription | undefined;

  constructor(
    private moduleByIdService: ModuleByIdService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.params.subscribe(({ moduleId, trackId }) => {
      this.viewsQuery = this.moduleByIdService.watch(
        { moduleId, trackId },
        { pollInterval: 500 }
      );
      this.querySubscription = this.viewsQuery.valueChanges.subscribe(
        ({ data, loading, error }) => {
          this.data = data;
          this.loading = loading;
          this.error = error;
        }
      );
    });
  }

  public ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.querySubscription?.unsubscribe();
  }
}
