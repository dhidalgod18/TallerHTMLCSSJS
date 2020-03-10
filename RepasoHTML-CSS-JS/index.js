const boton = document.getElementById("Boton");

const cambiar = () => {
    document.getElementById("valor_resultado").innerHTML = "42";
}

boton.addEventListener("click", cambiar)

