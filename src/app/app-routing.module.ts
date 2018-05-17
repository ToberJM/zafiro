import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
    /*=============================================
                COMPONENTES
    =============================================*/
import { SlideComponent } from './components/slide/slide.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InfoProductoComponent } from './components/info-producto/info-producto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'productos/:valor', component: ProductosComponent},
  { path: 'informacion-producto/:valor', component: InfoProductoComponent},
  { path: 'productos/:valor/:paginacion', component: ProductosComponent},
  { path: 'informacion-producto/:valor/:paginacion', component: InfoProductoComponent},
  { path: 'buscador/:valor', component: ProductosComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
