import { Component, OnInit } from '@angular/core';
import { GLOBAL } from './../../services/global';
import { SlideService } from '../../services/slide.service';
import { AnimacionScroll } from './../../../assets/scrollReveal';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  providers: [ SlideService, AnimacionScroll]
})
export class SlideComponent implements OnInit {
  public GLOBAL: string;
  constructor(private _slideService: SlideService,
              private _animacionScroll: AnimacionScroll
              ) {
    this.GLOBAL = GLOBAL.url;
   }

  ngOnInit() {
    this.animacionSlide();
    this._animacionScroll.animacionLateral();
  }
  /*public cargarDatosSlide(){
    this._slideService.getDatos().subscribe(
      response =>{
        if(!response){
          console.log("problema de conexion");
        }else{
          this.slide = response;
          console.log(this.slide);
          for(var i=0;i<this.slide.length-1;i++){
            this.estiloImgProducto[i] = JSON.parse(this.slide[i]["estiloImgProducto"]);
          }
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }*/
  public animacionSlide() {
     /*=============================================
    VARIABLES
    =============================================*/

    let item = 0;
    const itemPaginacion = $('#paginacion li');
    let interrumpirCiclo = false;
    const imgProducto = $('.imgProducto');
    const titulos1 = $('#slide h1');
    const titulos2 = $('#slide h2');
    const titulos3 = $('#slide h3');
    const btnVerProducto = $('#slide button');
    let detenerIntervalo = false;
    let toogle = false;

    $('#slide ul li').css({'width': 100 / $('#slide ul li').length + '%'});
    $('#slide ul').css({'width': $('#slide ul li').length * 100 + '%'});

    /*=============================================
    ANIMACIÓN INICIAL
    =============================================*/

    $(imgProducto[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
    $(imgProducto[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);

    $(titulos1[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
    $(titulos1[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);

    $(titulos2[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
    $(titulos2[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);

    $(titulos3[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
    $(titulos3[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);

    $(btnVerProducto[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
    $(btnVerProducto[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);


    /*=============================================
    PAGINACIÓN
    =============================================*/

    $('#paginacion li').click(function() {

      item = $(this).attr('item') - 1;

      movimientoSlide(item);
    });

    /*=============================================
    AVANZAR
    =============================================*/

    function avanzar() {

      if (item === $('#slide ul li').length - 1) {
        item = 0;
      } else {
        item++;
      }
      movimientoSlide(item);
    }
    $('#slide #avanzar').click(function() {
      avanzar();
    });
    /*=============================================
    RETROCEDER
    =============================================*/
    $('#slide #retroceder').click(function() {

      if (item === 0) {

        item = $('#slide ul li').length - 1;

      } else {
        item--;
      }
      movimientoSlide(item);
    });
    /*=============================================
    MOVIMIENTO SLIDE
    =============================================*/
    // tslint:disable-next-line:no-shadowed-variable
    function movimientoSlide(item) {
      // http://easings.net/es
      $('#slide ul').animate({'left': item * -100 + '%'}, 1000);
      $('#paginacion li').css({'opacity': .5});
      $(itemPaginacion[item]).css({'opacity': 1});
      interrumpirCiclo = true;

      $(imgProducto[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
      $(imgProducto[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);

      $(titulos1[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
      $(titulos1[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);

      $(titulos2[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
      $(titulos2[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);

      $(titulos3[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
      $(titulos3[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);

      $(btnVerProducto[item]).animate({'top': -10 + '%', 'opacity': 0}, 100);
      $(btnVerProducto[item]).animate({'top': 30 + 'px', 'opacity': 1}, 600);
    }

    /*=============================================
    INTERVALO
    =============================================*/

    setInterval(function() {
      if (interrumpirCiclo) {
        interrumpirCiclo = false;
      } else {
        if (!detenerIntervalo) {
          avanzar();
        }
      }
    }, 3000);
    /*=============================================
    APARECER FLECHAS
    =============================================*/
    $('#slide').mouseover(function() {
      $('#slide #retroceder').css({'opacity': 1});
      $('#slide #avanzar').css({'opacity': 1});
      detenerIntervalo = true;
    });
    $('#slide').mouseout(function() {
      $('#slide #retroceder').css({'opacity': 0});
      $('#slide #avanzar').css({'opacity': 0});
      detenerIntervalo = false;
    });

    /*=============================================
    ESCONDER SLIDE
    =============================================*/

    $('#btnSlide').click(function() {
      if (!toogle) {
        toogle = true;
        $('#slide').slideUp('fast');
        $('#btnSlide').html('<i class="fa fa-angle-down"></i>');
      } else {
        toogle = false;
        $('#slide').slideDown('fast');
        $('#btnSlide').html('<i class="fa fa-angle-up"></i>');
      }
    });
  }
}
