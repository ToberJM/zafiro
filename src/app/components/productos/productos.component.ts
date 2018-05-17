import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from './../../services/global';
import { AnimacionScroll } from './../../../assets/scrollReveal';
import { EfectosPlantilla } from './../../../assets/plantilla';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./../destacados/destacados.component.css'],
  providers: [EfectosPlantilla, ProductosService, AnimacionScroll]
})
export class ProductosComponent implements OnInit, DoCheck {
  loading: boolean;
  modoAux: string;
  listaProductos: any;
  model = 1;
  public page;
  public pageActual;
  public coleccion: number;
  public modo: string;
  public GLOBAL: any;
  public categoria: any;
  public subCategorias: any;
  public productos: any;
  public valor: any = this.route.snapshot.params['valor'];
  public item: any;
  public ordenar: any;
  public valorProducto: any;
  public base;
  public tope;
  constructor(private route: ActivatedRoute,
    private _efectosPlantilla: EfectosPlantilla,
    private _productosService: ProductosService,
    private _animacionScroll: AnimacionScroll) {
    this.loading = true;
    this.GLOBAL = GLOBAL.url;
    this.modo = 'DESC';
    this.modoAux = this.modo;
    this.listaProductos = null;
    this.base = 0;
    this.tope = 12;
    this.page = 1;
    this.pageActual = 1;
    this.ordenar = 'id';
    this.productos = [];
    this.validarPaginacion();
  }

  ngOnInit() {
  }
  ngDoCheck() {
    if (this.valor !== this.route.snapshot.params['valor']) {
      this.valor = this.route.snapshot.params['valor'];
      this.loading = true;
      this.listaProductos = null;
      this.base = 0;
      this.page = 1;
      this.pageActual = 1;
      this.validarPaginacion();
    }
    if (this.page !== this.pageActual) {
      this.pageActual = this.page;
      this.base = (this.page - 1) * 12;
      this.cargarProductos();
    }
    if (this.modo !== this.modoAux) {
      this.loading = true;
      this.modoAux = this.modo;
      this.cargarProductos();
    }
  }

  efectos() {
    this._efectosPlantilla.herramientaTooltip();
    this._animacionScroll.animacionSimple();
  }
  validarPaginacion() {
    if (!this.route.snapshot.params['paginacion']) {
      this.pageActual = 1;
      this.base = 0;
      this.tope = 12;
    } else {
      this.pageActual = this.page;
      this.base = (this.page - 1) * 12;
      this.tope = 12;
    }
    this.validarRuta();
  }
    validarRuta() {
    if (this.route.snapshot.params['valor'] === 'articulos-nuevos') {
      this.item = 'nuevo';
      this.valorProducto = '1';
      this.ordenar = 'id';
      this.cargarProductos();
    } else if (this.route.snapshot.params['valor'] === 'articulos-mas-vendidos') {
      this.item = '';
      this.valorProducto = '';
      this.ordenar = 'ventas';
      this.cargarProductos();
     } else if (this.route.snapshot.params['valor'] === 'articulos-mas-vistos') {
      this.item = '';
      this.valorProducto = '';
      this.ordenar = 'vistas';
      this.cargarProductos();
     } else {
      this.cargarCategoria();
    }
  }
  cargarCategoria() {
    this._productosService.getCategorias('ruta', this.valor).subscribe(
      response => {
        if (!response) {
          this.cargarSubCategoria();
        } else {
          this.categoria = response;
          this.item = 'id_categoria';
          this.valorProducto = this.categoria['id'];
          this.cargarProductos();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  cargarSubCategoria() {
    this._productosService.getSubCategorias('ruta', this.valor).subscribe(
      response => {
        if (!response) {
          console.log('Peticion no encontrada');
        } else {
          this.subCategorias = response;
          this.item = 'id_subcategoria';
          this.valorProducto = this.subCategorias[0]['id'];
          this.cargarProductos();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  cargarProductos() {
    if (this.listaProductos == null) {
      this.cargarListaProductos();
    }
    this._productosService.getProductos(this.item, this.valorProducto, this.ordenar, this.base, this.tope, this.modo).subscribe(
      response => {
        if (!response) {
          console.log('Peticion no encontrada');
        } else {
          this.loading = false;
          this.productos = response;
          this.efectos();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  cargarListaProductos() {
    this._productosService.getListaProductos(this.item, this.valorProducto, this.ordenar).subscribe(
      response => {
        if (!response) {
          console.log('PETICION INCORRECTA');
        } else {
          this._efectosPlantilla.listaCuadricula();
          this._efectosPlantilla.migasDePan();
          this.listaProductos = Array.from(Object.keys(response)).length;
          response = null;
          this.paginacion();
        }
      }, error => {
        console.log(<any>error);
      });
  }
  paginacion() {
    this.coleccion = Math.ceil(this.listaProductos / 12);
  }
}

