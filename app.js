let textIngresado = "";
let portapapeles = "";


const textoValido = /^[a-z ñ\s]+$/;


let imagenLupa = document.querySelector(".icono-lupa");




function sistemaEncriptador(opcion) {

    textIngresado = document.querySelector(".texto-a-analizar").value;

    
    let mensajeClave = textIngresado;


    if (validarTexto() === true) {

      
        if (opcion === 1) {

           
            validarBusqueda(mensajeClave,encriptador(mensajeClave));

           
           } else{

            
            validarBusqueda(mensajeClave,desencriptador(mensajeClave));
           }
    } else {

        textIngresado = document.querySelector(".texto-a-analizar").value;
        return;
    }
}

function validarTexto() {
    
    if (textIngresado === "") {
        mostrarResultado("error", "No ha ingresado ningun tipo de texto");

       
        return false;

      

    } else if (!textoValido.test(textIngresado)) {
       
        mostrarResultado("error", "¡Recuerda! Sólo letras minúsculas y sin acentos");
        return false;

      
        } else {
            
            return true;
        }
}

function validarBusqueda(textoInicial,TextoFinal){

    if (textoInicial === TextoFinal) {

 
        mostrarResultado("Mensaje no encontrado", "");
     } else {

     
        mostrarResultado("", TextoFinal);
    }
    return;
}

function mostrarResultado(resultadoBusqueda, mensaje) {
    let mostradorNoticia = document.querySelector(".titulo-noticia");
    let mostradorMensaje = document.querySelector(".mensaje-obtenido");

    if (resultadoBusqueda === "error") {
        interruptorimagen(false);
        mostradorNoticia.innerHTML = "¡ERROR!";
        mostradorMensaje.innerHTML = mensaje;
    } else if (resultadoBusqueda === "Mensaje no encontrado") {
        interruptorimagen(false);
        mostradorNoticia.innerHTML = "Ningún mensaje fue encontrado";
        mostradorMensaje.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
    } else {
        mostradorNoticia.innerHTML = "Mensaje encontrado";
        mostradorMensaje.innerHTML = mensaje;
        portapapeles = mensaje;
        interruptorimagen(resultadoBusqueda === "");
    }
    return;
}

function encriptador(encriptado) {

    encriptado = encriptado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptador(mensajeSecreto) {
    mensajeSecreto = mensajeSecreto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return mensajeSecreto;
}

function copiarEnPortapapeles(){
    navigator.clipboard.writeText(portapapeles);
    return;
}

function interruptorimagen(comado) {
    let imagenActual = document.getElementById('imagenLupa');
    let nuevaImagen = document.createElement('img');
    
    if (comado) {
       
        nuevaImagen.src = './imgs/pngegg.png';
    } else {
       
        nuevaImagen.src = './imgs/pngegg.png';
    }

    nuevaImagen.id = 'imagenLupa'; 
    imagenActual.parentNode.replaceChild(nuevaImagen, imagenActual);
}