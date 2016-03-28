var Ivatec = new Object();
Ivatec.datos = {};
Ivatec.init = function(array){
	console.log(array);
	Ivatec.ID = array.IDApi;
}

Ivatec.addData = function(posicion,valor){
	Ivatec.datos[posicion] = valor;
	console.log(typeof Ivatec.datos);
}

Ivatec.ivatecAjax = function(url,type){
	if (window.jQuery) {  
        // jQuery is loaded
        if(typeof url != "undefined" && typeof type != "undefined"){
        	$.ajax({
	        	url: url,
	        	type: type,
	        	data: Ivatec.datos,
	        })
	        .always(function() {
	        	Ivatec.datos = {};
	        	console.log("complete");
	        });

        }else{
        	if(typeof url == "undefined"){
        		console.log("El parametro url no esta definido");
        	}else if(typeof type == "undefined"){
        		console.log("El parametro type no esta definido");
        	}else if(typeof data == "undefined"){
				console.log("El parametro data no esta definido");
        	}
        }
 
    	

        
    } else {
        // jQuery is not loaded
        alert("Se necesita de Jquery para realizar la petición AJAX");
    }
}
