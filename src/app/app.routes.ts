import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// dashboard components
import { AgendaComponent } from './components/dashboard/agenda/agenda.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
// administration components
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { MasterfileComponent } from './components/administracion/masterfile/masterfile.component';
// administration components
import { HotelesComponent } from './components/configuracion/hoteles/hoteles.component';
import { ParametrosComponent } from './components/configuracion/parametros/parametros.component';
import { RolesPermisosComponent } from './components/configuracion/roles-permisos/roles-permisos.component';

export const RUTAS: Routes = [
    // rutas principales
    { path: 'home', component: HomeComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'reportes', component: ReportesComponent },

    // rutas area de administración
    { path: 'clientes', component: ClientesComponent },
    { path: 'masterfile', component: MasterfileComponent },
    { path: 'usuarios', component: UsuariosComponent },

    // rutas area de configuracion
    { path: 'hoteles', component: HotelesComponent },
    { path: 'parametros', component: ParametrosComponent },
    { path: 'roles-permisos', component: RolesPermisosComponent },

    // default route
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

