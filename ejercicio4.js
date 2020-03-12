var campo;
var camporesultado;
var valor;

function operacion(){
    campo = document.getElementById('campo');
    camporesultado = document.getElementById('campotexto');
    valor = campo.value.trim().split(" ");
    camporesultado.value = valor.length;
    console.log(valor.length);
    
}