export  class AnimacionScroll {
    public static sr = ScrollReveal();
    animacionesCabecera() {
        AnimacionScroll.sr.reveal('.banerSuperiror', {
          duration : 1000,
          origin : 'bottom'
        });
          AnimacionScroll.sr.reveal('.segundoBaner', {
          duration : 1000,
          origin : 'bottom',
          distance : '200px'
        });
/*
      if (window.matchMedia('(min-width:768px)').matches) {
        AnimacionScroll.sr.reveal('.banerSuperiror', {
        duration : 1000,
        origin : 'bottom'
      });
        AnimacionScroll.sr.reveal('.segundoBaner', {
        duration : 1000,
        origin : 'bottom',
        distance : '200px'
      });
    }*/
    }
    animacionLateral() {
        AnimacionScroll.sr.reveal('#slide', {
        duration : 1000,
        origin : 'left',
        distance : '200px',
        delay: 600
      },
      50);
    }
    animacionSimple() {
      AnimacionScroll.sr.reveal('.box', { duration: 1000 }, 50);
    }
    animacionBotones() {
      AnimacionScroll.sr.reveal('.box', { duration: 1000, delay: 600 }, 70);
    }
}
