import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';


@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ],
  exports: [
    ModuleComponent
  ]
})
export class ModuleModule { }
