import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';



@NgModule({
  declarations: [
    ModuleComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ModuleRoutingModule
  ],
  exports: [
    ModuleComponent
  ]
})
export class ModuleModule { }
