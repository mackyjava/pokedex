var imagenes=[
     {
		"imagen":"assets/img/bulbasaur.png"
	},
	{
		"imagen":"assets/img/ivysaur.png"
	},
	{
		"imagen":"assets/img/venusaur.png"
	},
	{
		"imagen":"assets/img/charmander.png"
	},{
		"imagen":"assets/img/charmeleon.png"
	},
	{
		"imagen":"assets/img/charizard.png"
	},
	{
		"imagen":"assets/img/squirtle.png"
	},
	{
		"imagen":"assets/img/wartortle.png"
	},
	{
		"imagen":"assets/img/blastoise.png"
	},
	{
		"imagen":"assets/img/caterpie.png"
	},
	{
		"imagen":"assets/img/metapod.png"
	},
	{
		"imagen":"assets/img/butterfree.png"
	},
	{
		"imagen":"assets/img/weedle.png"
	},
	{
		"imagen":"assets/img/kakuna.png"
	},
	{
		"imagen":"assets/img/beedrill.png"
	},
	{
		"imagen":"assets/img/pidgey.png"
	},
	{
		"imagen":"assets/img/pidgeotto.png"
	},
	{
		"imagen":"assets/img/pidgeot.png"
	},
	{
		"imagen":"assets/img/rattata.png"
	},
	{
		"imagen":"assets/img/raticate.png"
	},
];

var cargarPagina= function(){
	cargarPersonajes();
	$(document).on("click",".personaje", mostrarDetallespersonaje);

};

var cargarPersonajes=function(){
	var url = "http://pokeapi.co/api/v2/pokemon-species/";
	 $.getJSON(url,function(response){
       var personajes = response.results;
       var total= response.count;
       console.log(personajes);
       // mostrarPersonajes(total);
        mostrarPersonajes(personajes, imagenes);
 });
}
var mostrarPersonajes= function(personajes, imagenes){
   	var $ul =$("#pokedex");
   	personajes.forEach(function(personaje,indice){
   		var imagen = imagenes[indice].imagen;
        var $li = $("<li></li>");
        var $a = $("<a 'href= #modal1 ','class=modal-trigger '></a>");
        var $img= $("<img />");
            $li.addClass("personaje");
            $li.attr("data-url",personaje.url);
            $img.attr("src", imagen);
            $a.text(personaje.name);
            $li.append($a);
            $li.append($img);
            $ul.append($li);
    });
}
var plantillaPersonaje="<h2>Pokemon</h2>"+
"<p><strong>nombre:</strong>_nombre_</p>"+
"<p><strong>habitat:</strong>_habitat_</p>"+
"<p><strong>color:</strong>_color_</p>"+
"<p><strong>shape:</strong>_shape_</p>"+
'<img src="_imagen_" class="center-align img">'
;

var mostrarDetallespersonaje = function(personajes){
	
	var url =$(this).data("url");
	var imagen = $(this).find("img").attr("src");
	console.log(imagen);
	var $pokemonContenedor=$("#pokemon");
	$.getJSON(url, function(response){
		$pokemonContenedor.html(
       plantillaPersonaje.replace("_nombre_", response.name)
       .replace("_habitat_", response.habitat.name)
       .replace("_color_", response.color.name)
       .replace("_shape_",response.shape.name)
        .replace("_imagen_",imagen)
       );
   });
};


$(document).ready(cargarPagina);
