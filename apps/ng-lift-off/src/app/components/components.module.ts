import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSectionsComponent } from './content-sections/content-sections.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { QueryResultComponent } from './query-result/query-result.component';



@NgModule({
  declarations: [
    ContentSectionsComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ModuleDetailComponent,
    QueryResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
