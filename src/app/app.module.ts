import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders} from './app-routing.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CabezoteComponent } from './components/cabezote/cabezote.component';
import { SlideComponent } from './components/slide/slide.component';
import { FooterComponent } from './components/footer/footer.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InfoProductoComponent } from './components/info-producto/info-producto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BanerComponent } from './components/baner/baner.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezoteComponent,
    SlideComponent,
    FooterComponent,
    DestacadosComponent,
    ProductosComponent,
    InfoProductoComponent,
    NotFoundComponent,
    BanerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
  exports: [NotFoundComponent]
})
export class AppModule { }
