 import { RouterModule, Routes } from '@angular/router';

 import { PagesComponent } from '../pages.component';
 import { HotelesComponent } from './hoteles/hoteles.component';
 import { DivisasComponent } from './divisas/divisas.component';
 import { EstadosComponent } from './estados/estados.component';
 import { ParametrosComponent } from './parametros/parametros.component';
 import { RolesPermisosComponent } from './roles-permisos/roles-permisos.component';


 const confRoutes: Routes = [
     {
         path: '',
         component: PagesComponent,
         children: [
             { path: 'hoteles', component: HotelesComponent },
             { path: 'divisas', component: DivisasComponent },
             { path: 'estados', component: EstadosComponent },
             { path: 'parametros', component: ParametrosComponent },
             { path: 'roles-permisos', component: RolesPermisosComponent },
         ]
     },
];
 export const CONFIGURACIONROUTES = RouterModule.forChild(confRoutes );
