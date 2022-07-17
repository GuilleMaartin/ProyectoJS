//import { variedades } from "./variables"

const modalPadre = document.querySelector(".modalPadre")

const carritoButton = document.querySelector(".carritoButton") 

const carritoCerrar = document.querySelector(".carritoCerrar")

const modalCarrito = document.getElementsByClassName("modal-carrito")


carritoButton.addEventListener('click', ()=>{
    modalPadre.classList.add('visible')
})

carritoCerrar.addEventListener('click', () =>{
    modalPadre.classList.add('invisible')
})

//
//carritoCerrar.addEventListener('click', ()=>{
//    modalPadre.classList.remove('modal-active')
//})

// modalPadre.addEventListener('click',()=>{
//     cerrarCarrito.click()
// })

// modalCarrito.addEventListener('click', (e)=>{
//     e.stopPropagation()
// })

//si pero te alejaste bastanteok nada ahi si
//localStorage.removeItem("nombre")
//localStorage.clear()