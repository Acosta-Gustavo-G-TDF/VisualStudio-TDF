"use strict";

let botonLista = document.getElementById("botonLista");
let lista = document.getElementById("lista");
let inputLista = document.getElementById("inputLista");

function agregarElemento(){
    let elemento = document.createElement("li");
    elemento.innerHTML = inputLista.value;
    lista.appendChild(elemento);
}

let botonParrafo = document.getElementById("botonParrafo");
let divParrafo = document.getElementById("divParrafo");
let inputParrafo = document.getElementById("inputParrafo");

function agregarParrafo(){
    let parrafo = document.createElement("p");
    parrafo.innerHTML = inputParrafo.value;
    divParrafo.appendChild(parrafo);
}