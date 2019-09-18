import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ReportesComponent } from './reportes/reportes.component';

import { DASHBOARDROUTES } from './dashboard.routes';

@NgModule({
    declarations: [
        HomeComponent,
        AgendaComponent,
        ReportesComponent,
    ],
    exports: [
        HomeComponent,
        AgendaComponent,
        ReportesComponent,
    ],
    imports: [
        RouterModule,
        DASHBOARDROUTES
    ],
    providers: [],
})
export class DashboardModule { }
