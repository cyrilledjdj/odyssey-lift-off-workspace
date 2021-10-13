import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModuleModule } from '../module/module.module';
import { TrackRoutingModule } from './track-routing.module';
import { TrackComponent } from './track.component';

@NgModule({
  declarations: [TrackComponent],
  imports: [CommonModule, TrackRoutingModule, ModuleModule],
  exports: [TrackComponent],
})
export class TrackModule {}
