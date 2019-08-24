import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
// componentes repetitivos
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MainComponent } from './components/shared/main/main.component';
import { ShortcutMenuComponent } from './components/shared/shortcut-menu/shortcut-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
// import HomeComponent default
import { HomeComponent } from './components/home/home.component';
// import componentes dashboard
import { AgendaComponent } from './components/dashboard/agenda/agenda.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
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
// import componentes area de configuracion
import { HotelesComponent } from './components/configuracion/hoteles/hoteles.component';
import { DivisasComponent } from './components/configuracion/divisas/divisas.component';
import { EstadosComponent } from './components/configuracion/estados/estados.component';
import { ParametrosComponent } from './components/configuracion/parametros/parametros.component';
import { RolesPermisosComponent } from './components/configuracion/roles-permisos/roles-permisos.component';

// importacion de rutas
import { RUTAS } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
// componentes shared
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    ShortcutMenuComponent,
    FooterComponent,
// home component defaul
    HomeComponent,
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
