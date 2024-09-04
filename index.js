//defino mis botoncitos

const btnGuardar = document.getElementById("btnGuardar");
const btnEliminar = document.getElementById("btnEliminar");

const lineaNombre = document.getElementsByTagName("ponerNombre");

let datos=new Array ();


//vamos a hacer la función del botón de guardar
btnGuardar.addEventListener("click",function(event){
    event.preventDefault();
    if(){
        
    }


    let elemento = {"nombre":nombre.value};
datos.push(elemento);
localStorage.setItem("datos",JSON.stringify(datos));
localStorage.setItem("nombre",nombre)

if (Array=!null){
    alertNombreGuardado.innerHTML="El nombre fue guardado";

}

}); //btnGuardar








//hay que cargar los datos que ya estén guardados de otra sesión, cargan al cargar la página!! Se borran cuando se borra el caché
window.addEventListener("load", function(){
    if(this.localStorage.getItem("datos") !=null){
        datos=JSON.parse(this.localStorage.getItem("datos"));
    }//!=null

        lineaNombre.insertAdjacentHTML("beforeend",row);
        lineaNombre.insert

});//window load
