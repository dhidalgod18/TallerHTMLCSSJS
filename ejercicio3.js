
var resultado=0;
var resultadoFinal=0;
var resultadominimo=0;
var resultadomaximo=0;
var cadena = '';


function operaciones(){
    var caja = document.getElementById('campo');
    var caja1 = document.getElementById('campo1');
    var caja2 = document.getElementById('campo2');
    var caja3 = document.getElementById('campo3');
    var caja4 = document.getElementById('campo5');
    var campo = document.getElementById('campo8');
    var campoMin = document.getElementById('campo6');
    var campoMax = document.getElementById('campo7');


  var valor = caja.value;
   console.log(valor);
   var valor1 = caja1.value;
   console.log(valor1);
   var valor2 = caja2.value;
   console.log(valor2);
   var valor3 = caja3.value;
   console.log(valor3);
   var valor4 = caja4.value;
   console.log(valor4);

   resultado =parseInt(valor) + parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4) ;
   resultadoFinal = resultado / 5;
   console.log(resultado);
   console.log(resultadoFinal);
   campo.value = resultadoFinal;

resultadominimo = Math.min(valor , valor1, valor2 , valor3 , valor4);
console.log(resultadominimo);
campoMin.value = resultadominimo;

resultadomaximo = Math.max(valor , valor1, valor2 , valor3 , valor4);
console.log(resultadomaximo);
campoMax.value = resultadomaximo;



}