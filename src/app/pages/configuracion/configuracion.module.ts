import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelesComponent } from './hoteles/hoteles.component';
import { DivisasComponent } from './divisas/divisas.component';
import { EstadosComponent } from './estados/estados.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { RolesPermisosComponent } from './roles-permisos/roles-permisos.component';

import { CONFIGURACIONROUTES } from './configuracion.routes';

@NgModule({
    declarations: [
        HotelesComponent,
        DivisasComponent,
        EstadosComponent,
        ParametrosComponent,
        RolesPermisosComponent
    ],
    exports: [
        HotelesComponent,
        DivisasComponent,
        EstadosComponent,
        ParametrosComponent,
        RolesPermisosComponent
    ],
    imports: [
        RouterModule,
        CONFIGURACIONROUTES
    ],
    providers: [],
})
export class ConfiguracionModule { }
