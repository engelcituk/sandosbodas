import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
// componentes repetitivos
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MainComponent } from './components/shared/main/main.component';
// import HomeComponent default
import { HomeComponent } from './components/home/home.component';
// import componentes dashboard
import { AgendaComponent } from './components/dashboard/agenda/agenda.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
// import componentes area administracion
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { MasterfileComponent } from './components/administracion/masterfile/masterfile.component';
// import componentes area de configuracion
import { HotelesComponent } from './components/configuracion/hoteles/hoteles.component';
import { ParametrosComponent } from './components/configuracion/parametros/parametros.component';
import { RolesPermisosComponent } from './components/configuracion/roles-permisos/roles-permisos.component';

// importacion de rutas
import { RUTAS } from './app.routes';
import { ShortcutMenuComponent } from './components/shared/shortcut-menu/shortcut-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CeremoniasComponent } from './components/administracion/ceremonias/ceremonias.component';
import { BanquetesComponent } from './components/administracion/banquetes/banquetes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    AgendaComponent,
    ReportesComponent,
    ClientesComponent,
    UsuariosComponent,
    MasterfileComponent,
    HotelesComponent,
    ParametrosComponent,
    RolesPermisosComponent,
    ShortcutMenuComponent,
    FooterComponent,
    CeremoniasComponent,
    BanquetesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
