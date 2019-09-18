import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ClientesComponent } from './clientes/clientes.component';
import { CeremoniasComponent } from './ceremonias/ceremonias.component';
import { BanquetesComponent } from './banquetes/banquetes.component';
import { TipoceremoniasComponent } from './tipoceremonias/tipoceremonias.component';
import { TipolugaresComponent } from './tipolugares/tipolugares.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ComisionesComponent } from './comisiones/comisiones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MasterfileComponent } from './masterfile/masterfile.component';

import { ADMINROUTES } from './aministracion.routes';

@NgModule({
    declarations: [
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
        ComisionesComponent,
        UsuariosComponent,
        MasterfileComponent,
    ],
    exports: [
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
        ComisionesComponent,
        UsuariosComponent,
        MasterfileComponent,
    ],
    imports: [
        RouterModule,
        ADMINROUTES
    ],
    providers: [],
})
export class AdministracionModule { }
