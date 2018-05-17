/*=============================================
BUSCADOR
=============================================*/

$('#buscador input').change(function() {

const busqueda = $('#buscador input').val();

const expresion = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

if (!expresion.test(busqueda)) {

    $('#buscador input').val('');

} else {

    const evaluarBusqueda = busqueda.replace(/[áéíóúÁÉÍÓÚ ]/g, '-');

    const rutaBuscador = $('#buscador a').attr('routerLink');
    console.log(rutaBuscador + '/' + evaluarBusqueda);
    if ($('#buscador input').val() !== '') {

    $('#buscador a').attr('routerLink', rutaBuscador + '/' + evaluarBusqueda);

    }

}
});
/*=============================================
BUSCADOR CON ENTER
=============================================*/
$('#buscador input').focus(function() {

$(document).keyup(function(event) {

    event.preventDefault();

    if (event.keyCode === 13 && $('#buscador input').val() !== '') {

    const rutaBuscador = $('#buscador a').attr('href');

    window.location.href = rutaBuscador;
    }
});
});
