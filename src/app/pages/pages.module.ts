
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';

// import { DashboardModule } from './dashboard/dashboard.module';
// import { ConfiguracionModule } from './configuracion/configuracion.module';
// import { AdministracionModule } from './administracion/administracion.module';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
     PagesComponent
    ],
  exports: [],
  imports: [
  // DashboardModule,
    // ConfiguracionModule,
    // AdministracionModule,
    // SharedModule,

  ],
  providers: []
})
export class PagesModule {}
