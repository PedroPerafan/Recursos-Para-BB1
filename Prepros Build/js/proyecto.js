var editar = false;
$("#editar").click(function(){
	console.log($(this).text());
	if($(this).text()=="Editar"){
		$(this).text("Editando");
		editar = true;
	}else{
		$(this).text("Editar");
		editar = false;
	}
});

$(".navbar-brand").click(function(event) {
	if(editar==true){
		$(this).css("display","none");
		var nombre = $(this).text();
		var campo = "<div id='formNuevoNombre' style='margin-top:7px'><input type='text' id='nuevoNombre' value='"+nombre+"'><button id='guardarNombre' class='btn btn-primary'>Guardar</button></div>";
		$(this).before(campo);
	}
});


$("body").delegate("#guardarNombre","click",function(){
	console.log("Guardando...");
	var nuevoNombre = $("#nuevoNombre").val();
	$("#formNuevoNombre").remove();
	$(".navbar-brand").text(nuevoNombre).css("display","block");
	$("title").text(nuevoNombre);
});

$("#Texto1 p").click(function(event) {
	if(editar==true){
		var texto = $(this).text();
		$("#Texto1 p").html("").before("<div id='formNuevoTexto1'><textarea id='nuevoTexto1' class='col-md-12' style='height:150px'>"+texto.trim()+"</textarea><button id='guardarTexto1' class='btn btn-primary'>Guardar</button></div>");
	}
});

$("body").delegate("#guardarTexto1","click",function(){
	console.log("Guardando...");
	var nuevoTexto = $("#nuevoTexto1").val();
	$("#Texto1 p").text(nuevoTexto);
	$("#formNuevoTexto1").remove();
});

