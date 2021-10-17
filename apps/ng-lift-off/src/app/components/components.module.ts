import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ContentSectionsComponent } from './content-sections/content-sections.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MdContentComponent } from './md-content/md-content.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { QueryResultComponent } from './query-result/query-result.component';



@NgModule({
  declarations: [
    ContentSectionsComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ModuleDetailComponent,
    QueryResultComponent,
    MdContentComponent
  ],
  exports: [
    ContentSectionsComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ModuleDetailComponent,
    QueryResultComponent,
    MdContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild(),
  ]
})
export class ComponentsModule { }
