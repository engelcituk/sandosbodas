import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
    declarations: [
        // NoPageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NoPageFoundComponent
    ],
    exports: [
        // NoPageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NoPageFoundComponent
    ],
    imports: []
})
export class SharedModule { }
