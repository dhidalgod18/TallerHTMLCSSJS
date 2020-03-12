
function contar() {
    var cant = 0;
    var palabra = '';
    var a = 0;
    var e = 0;
    var iq = 0;
    var o = 0;
    var u = 0;
    var valor = document.getElementById("campo").value;
    palabra = valor;
    console.log(palabra);
    for ( i = 0; i < String(palabra).length; i++) {
        
        if (palabra[i] == "a" || palabra[i] == "A") {
            a++;

        } else if (palabra[i] == "e" || palabra[i] == "E") {
            e++;
           
        } else if (palabra[i] == "i" || palabra[i] == "I")  {
            iq++;
           
        } else if (palabra[i] == "o" || palabra[i] == "O") {
            o++;
            
        } else if (palabra[i] == "u" || palabra[i] == "U") {
            u++;
            

        }        

    }
    document.getElementById("cantidadA").innerText = "Cantidad A:" + a;
    document.getElementById("cantidadE").innerText = "Cantidad E:" + e;
    document.getElementById("cantidadI").innerText = "Cantidad I:" + iq;
    document.getElementById("cantidadO").innerText = "Cantidad O:" + o;
    document.getElementById("cantidadU").innerText = "Cantidad U:" + u;
    
    
}

