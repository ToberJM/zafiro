import { Component, OnInit } from '@angular/core';
import { GLOBAL } from './../../services/global';
import { AnimacionScroll } from './../../../assets/scrollReveal';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css'],
  providers: [AnimacionScroll]
})
export class BanerComponent implements OnInit {
  public GLOBAL: any;
  constructor(private _animacionScroll: AnimacionScroll) {
    this.GLOBAL = GLOBAL.url;
    this.efectoScroll();
  }

  ngOnInit() {
      this._animacionScroll.animacionSimple();
  }
  efectoScroll() {
    $(window).scroll(function() {
      let scrollY = window.pageYOffset;
      if (window.matchMedia('(min-width:768px)').matches) {
          if ($('.banner').html() != null) {
              if (scrollY < ($('.banner').offset().top) - 150) {
                  $('.banner img').css({'margin-top': -scrollY / 3 + 'px'});
              } else {
                  scrollY = 0;
              }
          }
      }
  });
  $.scrollUp({
      scrollText: '',
      scrollSpeed: 2000,
      easingType: 'easeOutQuint'
  });
  }
}
