$(document).ready(function(){
	Ivatec.init({
	    IDApi   : '123',
	    PassApi : 'Hola123',
	    CursoApi: '1',
	    URL : "ivatec.com/curso1"
  	});
  	

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
	/*	
	$("[data-tipo]").each(function() {
		var letras = new Array('a','b','c','d','e','f');
		var random = Math.floor((Math.random() * 1000) + 1); 
		var numero = letras[Math.floor((Math.random() * letras.length))]+random+letras[Math.floor((Math.random() * letras.length))];
		$(this).attr("data-texto",numero);
	});
	*/	

	$("[data-tipo],[data-texto]").click(function(event){
		event.preventDefault();
		var id = $(this).data("texto");
		if(typeof id != "undefined" && ($(this).find("textarea").length || $(this).find("input").length)==0 && editar==true){
			console.log(id);
			console.log($(this).data("tipo"));
			var tipo = (typeof $(this).data("tipo") != "undefined")? $(this).data("tipo") : "textarea";
			var alto = (typeof $(this).data("alto") != "undefined")? $(this).data("alto") : (tipo=="textarea")? "100":"30" ;
			var texto = $(this).text();

			$(this).html(" ");
			console.log("Borrando..");

			

			var input = (tipo=="textarea")? "<textarea data-nuevo='"+id+"' style='color:black;height:"+alto+"px' class='col-md-12'>"+texto.trim()+"</textarea>" : "<input data-nuevo='"+id+"' class='col-md-12' style='color:black;height:"+alto+"px' type='text' value='"+texto.trim()+"'/>";
			$(this).html("<div class='editando'>"+input+"<button data-guardar='"+id+"' class='btn btn-primary'>Guardar</button></div>");
		}else{
			if(typeof id == "undefined"){
				alert("No tiene Texto-ID");
			}
		}
	});

	$("body").delegate("[data-guardar]","click",function(){
		var id = $(this).data("guardar");
		console.log(id);
		console.log("Guardando...");
		var nuevo = $("textarea,input").data("nuevo",id);
		console.log(nuevo.val());
		console.log(id);
		var div = $("[data-texto='"+id+"']");
		div.html(" ");
		div.text(nuevo.val());
		//AJAX
		
		Ivatec.addData("param1","param1");
		Ivatec.ivatecAjax("get","nuevo");
	});

});


/*
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
*/