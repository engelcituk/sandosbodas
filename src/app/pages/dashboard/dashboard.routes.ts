import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from '../pages.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ReportesComponent } from './reportes/reportes.component';



const dashRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'agenda', component: AgendaComponent },
            { path: 'reportes', component: ReportesComponent },

            // default route

            { path: '', pathMatch: 'full', redirectTo: 'agenda' },
        ]
    },
];
export const DASHBOARDROUTES = RouterModule.forChild(dashRoutes);
