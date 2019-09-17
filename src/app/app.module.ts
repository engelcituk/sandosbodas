import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
// componentes repetitivos
import { HeaderComponent } from './pages/shared/header/header.component';
import { HeaderloginComponent } from './pages/shared/headerlogin/headerlogin.component';


import { SidebarComponent } from './pages/shared/sidebar/sidebar.component';
import { ShortcutMenuComponent } from './pages/shared/shortcut-menu/shortcut-menu.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
// import HomeComponent default
import { HomeComponent } from './pages/dashboard/home/home.component';
import { LoginComponent } from './pages/login/login.component';

// import componentes dashboard
import { AgendaComponent } from './pages/dashboard/agenda/agenda.component';
import { ReportesComponent } from './pages/dashboard/reportes/reportes.component';

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
// import componentes area de configuracion
import { HotelesComponent } from './pages/configuracion/hoteles/hoteles.component';
import { DivisasComponent } from './pages/configuracion/divisas/divisas.component';
import { EstadosComponent } from './pages/configuracion/estados/estados.component';
import { ParametrosComponent } from './pages/configuracion/parametros/parametros.component';
import { RolesPermisosComponent } from './pages/configuracion/roles-permisos/roles-permisos.component';

// importacion de rutas
import { RUTAS } from './app.routes';
import { FullcalendarComponent } from './pages/shared/fullcalendar/fullcalendar.component';
import { DataTablesModule } from 'angular-datatables'; // datatables
import { FullCalendarModule } from '@fullcalendar/angular';
import { PagesComponent } from './pages/pages.component';
import { BreadcrumbsComponent } from './pages/shared/breadcrumbs/breadcrumbs.component';
import { NoPageFoundComponent } from './pages/shared/no-page-found/no-page-found.component'; // for FullCalendar!



@NgModule({
  declarations: [
    AppComponent,
    // componentes shared
    HeaderComponent,
    HeaderloginComponent,
    SidebarComponent,
    ShortcutMenuComponent,
    FooterComponent,
    // home component defaul
    HomeComponent,
    LoginComponent,
    // dashboard component
    AgendaComponent,
    ReportesComponent,
    // admininistration components
    ClientesComponent,
    CeremoniasComponent,
    BanquetesComponent,
    TipoceremoniasComponent,
    TipolugaresComponent,
    ProveedoresComponent,
    ServiciosComponent,
    ProductosComponent,
    AgenciasComponent,
    PaquetesComponent,
    HorariosComponent,
    RolesPermisosComponent,
    ComisionesComponent,
    UsuariosComponent,
    MasterfileComponent,
    // settings components
    HotelesComponent,
    DivisasComponent,
    EstadosComponent,
    ParametrosComponent,
    FullcalendarComponent,
    PagesComponent,
    BreadcrumbsComponent,
    NoPageFoundComponent,

  ],
  imports: [
  BrowserModule,
    DataTablesModule, // for datatables!
    FullCalendarModule, // for FullCalendar!
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(RUTAS, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
