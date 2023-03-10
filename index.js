const mostrar=document.getElementById('foto')
let arreglo=JSON.parse(localStorage.getItem('objetos'))
const mostrar_datos=document.getElementById("contactos")
const nombre=document.getElementById("m_name")
const apellido=document.getElementById('apellido')
const numero=document.getElementById('numero')
const gustos=document.getElementById('gustos')
const foto_perfil=document.getAnimations('imagen_perfil')
console.log(arreglo)

function mostrarFotos(){
    arreglo.forEach(element => {
        mostrar.innerHTML+=`
        <div class="imagenes">
            <img src=${element.foto} alt="">
        </div>
        `
    });
}
mostrarFotos()

function validar(){
    arreglo.forEach(element=>{
        if(nombre.value===element.nombre){
            mostrar_datos.innerHTML=
            `
                <h3>${element.nombre}</h3>
                foto_perfil=
            `
        }
        // else(apellido.value===element.apellido){
        //     mostrar_datos.innerHTML=
        //     `
        //         <h3>${element.apellido}</h3>
        //         foto_perfil=
        //     `
        // }else(numero.value===element.numero){
        //     mostrar_datos.innerHTML=
        //     `
        //         <h3>${element.numero}</h3>
        //     `
        // }
    });
}