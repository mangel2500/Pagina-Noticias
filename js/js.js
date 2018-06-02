var cargado = 1;
var i = 0;

window.onload = function(){ 
}

$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
    cargar();
  }
});

function cargar() {
  if (cargado < 3) {
      $.getJSON("https://rawgit.com/mangel2500/Prueba/master/json"+cargado+".json", function (jsonObject) {
          addrow(jsonObject);
      }); cargado++;
  } else {
      $('#mas').text('No hay más noticias');
  }
};

function addrow(json) {
  $.each(json.noticia, function (i, noticia) {
    $("#noticias").append('<div class="row">' +
      '<div class="col-sm-4">' +
      '<div class="col-sm-3">' +
      '<img src="' + noticia.imagen + '"class="img-responsive">' +
      '</div>' +
      '<div class="col-sm-9">' +
      '<h3 class="tituloNoticia">' + noticia.titulo + '</h3>' +
      '<br>' +
      '<p>' + noticia.resumen + '</p>' +
      '<div class="col-6">' + noticia.fecha + '</div>' +
      '<div class="comentarios">' +
      '<i class="fas fa-comment-alt"> 0</i>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>');
  })
};