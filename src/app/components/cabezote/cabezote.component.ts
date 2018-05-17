import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { PlantillaService } from '../../services/plantilla.service';
import { GLOBAL } from './../../services/global';
import { AnimacionScroll } from './../../../assets/scrollReveal';

@Component({
  selector: 'app-cabezote',
  templateUrl: './cabezote.component.html',
  styleUrls: ['./cabezote.component.css'],
  providers: [ProductosService, PlantillaService, AnimacionScroll]
})
export class CabezoteComponent implements OnInit, OnChanges {
  loading: boolean;
  public busqueda: any;
  public arrayCategorias: any;
  public arraySubCategorias: any;
  public GLOBAL: string;
  public RedesSociales: any;

  constructor(private _productosService: ProductosService,
              private _animacionScroll: AnimacionScroll,
              private _plantillaService: PlantillaService,
              ) {
    this.GLOBAL = GLOBAL.url;
    this.loading = true;
    this.arrayCategorias = [];
    this.arraySubCategorias = [];
    this.RedesSociales = [];
  }
   ngOnInit() {
    this.cargarCategorias();
    this._animacionScroll.animacionesCabecera();
    this.buscador();
  }
  ngOnChanges() {
  }
  /*=============================================
      CARGAR DATOS CATEGORIAS
  =============================================*/
  public cargarCategorias() {
    this._productosService.getCategorias('', '').subscribe(
      response => {
        if (!response) {
          console.log('problema de conexion');
        } else {
          this.arrayCategorias = response;
          this.subCategorias();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  /*=============================================
      CARGAR DATOS DE LAS SUB CATEGORIAS
  =============================================*/
  public subCategorias() {
    for (let index = 0; index < this.arrayCategorias.length; index++) {
      this._productosService.getSubCategorias('id_categoria', this.arrayCategorias[index]['id']).subscribe(
        response => {
          if (!response) {
            console.log('problema de conexion');
          } else {
            this.arraySubCategorias[index + 1] = response;
            this.cargarEstylosPlantilla();
            this.buscador();
            this.loading = false;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }
  /*=============================================
      ANIMACION BOTON CATEGORIAS
  =============================================*/
  public DeslizarCategorias() {
     if (window.matchMedia('(max-width:767px)').matches) {
        $('#btnCategorias').after($('#categorias').slideToggle('fast'));
      } else {
        $('#cabezote').after($('#categorias').slideToggle('fast'));
      }
  }
  /*=============================================
      CARGAR ESTILOS PLANTILLA
  =============================================*/

  public cargarEstylosPlantilla() {
    let respuesta;
    this._plantillaService.getStyle().subscribe(
      resp => {
        if (!resp) {
          console.log('problema de conexion');
        } else {
          respuesta = resp;
          this.RedesSociales = JSON.parse(respuesta.redesSociales);
          const colorFondo = respuesta.colorFondo;
          const colorTexto = respuesta.colorTexto;
          const barraSuperior = respuesta.barraSuperior;
          const textoSuperior = respuesta.textoSuperior;
          $('.backColor, .backColor a').css({'background': colorFondo,
                            'color': colorTexto});
          $('.barraSuperior, .barraSuperior a').css({'background': barraSuperior, 'color': textoSuperior});
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  buscador() {
  }
}
