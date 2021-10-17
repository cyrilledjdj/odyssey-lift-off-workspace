import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MarkdownModule } from 'ngx-markdown';
import { ContentSectionsComponent } from './content-sections/content-sections.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MdContentComponent } from './md-content/md-content.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { ModulesNavigationComponent } from './modules-navigation/modules-navigation.component';



@NgModule({
  declarations: [
    ContentSectionsComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ModuleDetailComponent,
    QueryResultComponent,
    MdContentComponent,
    ModulesNavigationComponent
  ],
  exports: [
    ContentSectionsComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ModuleDetailComponent,
    QueryResultComponent,
    MdContentComponent,
    ModulesNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    YouTubePlayerModule,
    MarkdownModule.forChild(),
  ]
})
export class ComponentsModule { }
