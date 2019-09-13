import { Routes } from '@angular/router';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { LoginComponent } from './pages/login/login.component';
// dashboard components
import { AgendaComponent } from './pages/dashboard/agenda/agenda.component';
import { EventoComponent } from './pages/dashboard/evento/evento.component';
import { ReportesComponent } from './pages/dashboard/reportes/reportes.component';
// administration components
// import componentes area administracion
import { ClientesComponent } from './pages/administracion/clientes/clientes.component';
import { CeremoniasComponent } from './pages/administracion/ceremonias/ceremonias.component';
import { BanquetesComponent } from './pages/administracion/banquetes/banquetes.component';
import { TipoceremoniasComponent } from './pages/administracion/tipoceremonias/tipoceremonias.component';
import { TipolugaresComponent } from './pages/administracion/tipolugares/tipolugares.component';
import { ProveedoresComponent } from './pages/administracion/proveedores/proveedores.component';
import { ServiciosComponent } from './pages/administracion/servicios/servicios.component';
import { ProductosComponent } from './pages/administracion/productos/productos.component';
import { AgenciasComponent } from './pages/administracion/agencias/agencias.component';
import { PaquetesComponent } from './pages/administracion/paquetes/paquetes.component';
import { HorariosComponent } from './pages/administracion/horarios/horarios.component';
import { ComisionesComponent } from './pages/administracion/comisiones/comisiones.component';
import { UsuariosComponent } from './pages/administracion/usuarios/usuarios.component';
import { MasterfileComponent } from './pages/administracion/masterfile/masterfile.component';
// administration components
import { HotelesComponent } from './pages/configuracion/hoteles/hoteles.component';
import { DivisasComponent } from './pages/configuracion/divisas/divisas.component';
import { EstadosComponent } from './pages/configuracion/estados/estados.component';
import { ParametrosComponent } from './pages/configuracion/parametros/parametros.component';
import { RolesPermisosComponent } from './pages/configuracion/roles-permisos/roles-permisos.component';

export const RUTAS: Routes = [
    // rutas auth
    { path: 'login', component: LoginComponent },
    // rutas principales
    { path: 'home', component: HomeComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'agenda/:id/:fecha', component: EventoComponent },
    { path: 'reportes', component: ReportesComponent },
    // rutas area de administración
    { path: 'clientes', component: ClientesComponent },
    { path: 'ceremonias', component: CeremoniasComponent },
    { path: 'banquetes', component: BanquetesComponent },
    { path: 'tipos-ceremonias', component: TipoceremoniasComponent },
    { path: 'tipos-lugares', component: TipolugaresComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'agencias', component: AgenciasComponent },
    { path: 'paquetes', component: PaquetesComponent },
    { path: 'horarios', component: HorariosComponent },
    { path: 'comisiones', component: ComisionesComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'masterfile', component: MasterfileComponent },
    // rutas area de configuracion
    { path: 'hoteles', component: HotelesComponent },
    { path: 'divisas', component: DivisasComponent },
    { path: 'estados', component: EstadosComponent },
    { path: 'parametros', component: ParametrosComponent },
    { path: 'roles-permisos', component: RolesPermisosComponent },
    // default route
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },

];

