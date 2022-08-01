"use strict";

let boton = document.getElementById("boton");
boton.addEventListener("click",contador7);

let cont=0;

function contador7(){
    for(let i=0;i<1000;i++){
        let num = Math.floor(Math.random()*6)+1;
        let num2 = Math.floor(Math.random()*6)+1;
        let sum=num+num2;
            if(sum==7){
                cont=cont+1;
            }
    }
    alert("La cantidad de 7 es: " + cont);    
}