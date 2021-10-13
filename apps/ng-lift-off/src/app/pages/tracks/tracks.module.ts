import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './tracks.component';

@NgModule({
  declarations: [TracksComponent],
  imports: [CommonModule, TracksRoutingModule],
  exports: [TracksComponent],
})
export class TracksModule {}
