var cadena='';
var operacion = '';
var resultado =0;
function myFunction(btn){
	var valor = btn.value;	
	cadena = cadena + valor;
	var caja = document.getElementById('campo');
	caja.value = cadena;	
}

function operador(btn){
	operacion = btn.value;
	cadena = cadena + operacion;
	var caja = document.getElementById('campo');
	caja.value = cadena;
}

function operaciones(){
	var operador
	var num1
	var num2

	var caja = document.getElementById('campo');
	if(operacion != '' && operacion == '+'){
		operador = cadena.indexOf(operacion);
		num1= parseInt(cadena.substr(0,operador))
		num2 = parseInt(cadena.substr(operador+1, operador))
		resultado = num1 + num2
		caja.value = resultado	
		cadena = resultado
	}else if(operacion != '' && operacion== '-'){
		operador = cadena.indexOf(operacion);
		num1= parseInt(cadena.substr(0,operador))
		num2 = parseInt(cadena.substr(operador+1, operador))
		resultado = num1 - num2
		caja.value = resultado
		cadena = resultado
		
	}else if(operacion != '' && operacion== '/'){
		operador = cadena.indexOf(operacion);
		num1= parseInt(cadena.substr(0,operador))
		num2 = parseInt(cadena.substr(operador+1, operador))
		resultado = num1 / num2
		caja.value = resultado
		cadena = resultado
	}else if(operacion != '' && operacion== '*'){
		operador = cadena.indexOf(operacion);
		num1= parseInt(cadena.substr(0,operador))
		num2 = parseInt(cadena.substr(operador+1, operador))
		resultado = num1 * num2
		caja.value = resultado
		cadena = resultado

	}
}

function limpiar(){

	var activa= document.getElementById('campo');
	cadena ='';
	activa.value = "";
     
}
