//primero se selecciona el html
const menu = document.querySelector(".menuhamburguesa");
const navegacion = document.querySelector(".navegacion")

//hoisting-contexto de ejecucion de javascript, como va creando cada elemento, fase creacion y fase de ejecucion

document.addEventListener("DOMContentLoaded",()=>{
    eventos();
})

const eventos = () =>{
    menu.addEventListener("click", abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove("oculto");
    btnCerrar();
}

const btnCerrar = () =>{
    const btncerrar = document.createElement("p");
    const overlay = document.createElement("div")
    overlay.classList.add("pantalla-completa");
    const body = document.querySelector("body");
        if(document.querySelectorAll(".pantalla-completa").length>0){
            return
        }
    body.appendChild(overlay)
    btncerrar.textContent = "x";
    btncerrar.classList.add("btn-cerrar");

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }

    navegacion.appendChild(btncerrar);
    cerrarMenu(btncerrar,overlay);
}


const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener("click", ()=>{
        navegacion.classList.add("oculto");
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add("oculto");
        boton.remove();
    }
}