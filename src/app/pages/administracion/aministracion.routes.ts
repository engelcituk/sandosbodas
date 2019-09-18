 import { RouterModule, Routes } from '@angular/router';

 import { PagesComponent } from '../pages.component';
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

 const administracionRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
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
            { path: 'masterfile', component: MasterfileComponent }
        ]
    }
];

 export const ADMINROUTES = RouterModule.forChild( administracionRoutes );
