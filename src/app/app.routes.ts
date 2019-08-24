import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// dashboard components
import { AgendaComponent } from './components/dashboard/agenda/agenda.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
// administration components
// import componentes area administracion
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { CeremoniasComponent } from './components/administracion/ceremonias/ceremonias.component';
import { BanquetesComponent } from './components/administracion/banquetes/banquetes.component';
import { TipoceremoniasComponent } from './components/administracion/tipoceremonias/tipoceremonias.component';
import { TipolugaresComponent } from './components/administracion/tipolugares/tipolugares.component';
import { ProveedoresComponent } from './components/administracion/proveedores/proveedores.component';
import { ServiciosComponent } from './components/administracion/servicios/servicios.component';
import { ProductosComponent } from './components/administracion/productos/productos.component';
import { AgenciasComponent } from './components/administracion/agencias/agencias.component';
import { PaquetesComponent } from './components/administracion/paquetes/paquetes.component';
import { HorariosComponent } from './components/administracion/horarios/horarios.component';
import { ComisionesComponent } from './components/administracion/comisiones/comisiones.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { MasterfileComponent } from './components/administracion/masterfile/masterfile.component';
// administration components
import { HotelesComponent } from './components/configuracion/hoteles/hoteles.component';
import { DivisasComponent } from './components/configuracion/divisas/divisas.component';
import { EstadosComponent } from './components/configuracion/estados/estados.component';
import { ParametrosComponent } from './components/configuracion/parametros/parametros.component';
import { RolesPermisosComponent } from './components/configuracion/roles-permisos/roles-permisos.component';

export const RUTAS: Routes = [
    // rutas principales
    { path: 'home', component: HomeComponent },
    { path: 'agenda', component: AgendaComponent },
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
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

