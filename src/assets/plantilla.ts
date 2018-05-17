export class EfectosPlantilla {
        /*=============================================
            MENSAJES PARA EL USUARIO
        =============================================*/
        herramientaTooltip() {
            $(document).ready(function() {
                $('[data-toggle="tooltip"]').tooltip();
            });
        }
        /*=============================================
        CUADRÍCULA O LISTA
        =============================================*/
        listaCuadricula() {
            const btnList = $('.btnList');

            for (let i = 0; i < btnList.length; i++) {

                $('#btnGrid' + i).click(function() {

                    const numero = $(this).attr('id').substr(-1);

                    $('.list' + numero).hide();
                    $('.grid' + numero).show();

                    $('#btnGrid' + numero).addClass('backColor');
                    $('#btnList' + numero).removeClass('backColor');
                });

                $('#btnList' + i).click(function() {

                    const numero = $(this).attr('id').substr(-1);

                    $('.list' + numero).show();
                    $('.grid' + numero).hide();

                    $('#btnGrid' + numero).removeClass('backColor');
                    $('#btnList' + numero).addClass('backColor');

                });
            }
        }
        /*=============================================
        MIGAS DE PAN
        =============================================*/
        migasDePan() {
            const pagActiva = $('.pagActiva').html();
            if (pagActiva != null) {
                const regPagActiva = pagActiva.replace(/-/g, ' ');
                $('.pagActiva').html(regPagActiva);
            }
        }
        /*=============================================
        ENLACES PAGINACIÓN
        =============================================*/
        enlacesPaginacion() {
            const url = window.location.href;
            const indice = url.split('/');
            $('#item' + indice.pop()).addClass('active');
        }
        /*=============================================
        OFERTAS
        =============================================*/
        ofertas() {
            $('.cerrarOfertas').click(function() {
                $(this).parent().remove();
            });
        }
        /*=============================================
        CONTADOR DE TIEMPO
        =============================================*/
        contador() {
            const finOferta = $('.countdown');
            const fechaFinOferta = [];
            for (let i = 0; i < finOferta.length; i++) {
                fechaFinOferta[i] = $(finOferta[i]).attr('finOferta');
                $(finOferta[i]).dsCountDown({
                endDate: new Date(fechaFinOferta[i]),
                theme: 'flat',
                titleDays: 'Días',
                titleHours: 'Horas',
                titleMinutes: 'Minutos',
                titleSeconds: 'Segundos'
                });
            }
        }
        /*=============================================
        EVENTOS PIXEL DE FACEBOOK
        =============================================*/
       /* pixelFacebook(){
            $(".pixelCategorias").click(function(){

                var titulo = $(this).attr("titulo");
                fbq('track', 'Categoria '+titulo, {
                    title: titulo
                })
            })
            $(".pixelSubCategorias").click(function(){
                var titulo = $(this).attr("titulo");
                fbq('track', 'Subcategoria '+titulo, {
                    title: titulo
                })
            })
            $(".pixelOferta").click(function(){
                var titulo = $(this).attr("titulo");
                fbq('track', 'Oferta '+titulo, {
                    title: titulo
                })
            })
        }*/
}
