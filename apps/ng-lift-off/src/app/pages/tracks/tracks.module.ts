import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './tracks.component';

@NgModule({
  declarations: [TracksComponent],
  imports: [CommonModule, ComponentsModule, TracksRoutingModule],
  exports: [TracksComponent],
})
export class TracksModule {}
