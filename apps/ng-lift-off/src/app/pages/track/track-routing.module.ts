import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './track.component';

const routes: Routes = [
  {
    path: '',
    component: TrackComponent,
  },
  {
    path: ':trackId',
    component: TrackComponent,
  },
  {
    path: ':trackId/module',
    loadChildren: () =>
      import('../module/module.module').then((m) => m.ModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackRoutingModule {}
