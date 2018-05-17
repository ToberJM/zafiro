import { Component, OnInit } from '@angular/core';
import { GLOBAL } from './../../services/global';
import { EfectosPlantilla } from './../../../assets/plantilla';
import { AnimacionScroll } from './../../../assets/scrollReveal';
import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css'],
  providers: [EfectosPlantilla, ProductosService, AnimacionScroll]
})
export class DestacadosComponent implements OnInit {
  loading: boolean;
  public modo: any;
  public tope: any;
  public base: any;
  public GLOBAL: string;
  public titulosModulos: Array<String>;
  public rutasModulos: Array<String>;
  public modulos;
  constructor(private _efectosPlantilla: EfectosPlantilla,
              private _productosService: ProductosService,
              private _animacionScroll: AnimacionScroll) {
    this.GLOBAL = GLOBAL.url;
    this.loading = true;
    this.titulosModulos = ['ARTICULOS NUEVOS', 'LO MAS VENDIDO', 'LO MAS VISTO'];
    this.rutasModulos = ['articulos-nuevos', 'articulos-mas-vendidos', 'articulos-mas-vistos'];
    this.modulos = [];
    this.base = 0;
    this.tope = 4;
    this.modo = 'DESC';
  }

  ngOnInit() {
    this.cargarDatosModulos();
    this._efectosPlantilla.herramientaTooltip();
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
    this._efectosPlantilla.listaCuadricula();
  }
  cargarDatosModulos(): any {
    if (this.titulosModulos[0] === 'ARTICULOS NUEVOS') {
      this._productosService.getProductos('nuevo', '1', 'id', this.base, this.tope, this.modo).subscribe(
        response => {
          if (!response) {
            console.log('problema de conexion');
          } else {
            this.modulos[0] = response;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
    if (this.titulosModulos[1] === 'LO MAS VENDIDO') {
      this._productosService.getProductos('' , '', 'ventas', this.base, this.tope, this.modo).subscribe(
        response => {
          if (!response) {
            console.log('problema de conexion');
          } else {
            this.modulos[1] = response;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
    if (this.titulosModulos[2] === 'LO MAS VISTO') {
      this._productosService.getProductos('', '', 'vistas', this.base, this.tope, this.modo).subscribe(
        response => {
          if (!response) {
            console.log('problema de conexion');
          } else {
            this.modulos[2] = response;
            this.loading = false;
            this._animacionScroll.animacionSimple();
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }
}
