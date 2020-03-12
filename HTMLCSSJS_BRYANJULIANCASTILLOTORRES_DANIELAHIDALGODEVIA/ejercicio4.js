var campo;
var camporesultado;
var valor;

function operacion(){
    campo = document.getElementById('campopalabra');
    camporesultado = document.getElementById('campotextoconpalabra');
    valor = campo.value.trim().split(" ");
    camporesultado.value = valor.length;
    console.log(valor.length);
    
}