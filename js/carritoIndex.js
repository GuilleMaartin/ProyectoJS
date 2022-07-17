import {variedades} from "./variables.js";


let carritoCompras = []
let contenedorCarrito = document.getElementById("carrito-contenedor")

export const carritoIndex = (variedadId)=>{

     const renderProductoCarrito = () =>{         
          let variedad = variedades.find(variedad => variedad.id == variedadId)
          let busquedaCarrito = carritoCompras.find(variedad => variedad.id == variedadId)
          if(busquedaCarrito == undefined){
               carritoCompras.push(variedad)
               variedad.cantidad = 1
               let div = document.createElement('div')
               div.classList.add('productoEnCarrito')
               div.innerHTML =
                              ` 
                              <p>${variedad.nombre}</p>
                              <p>Precio: ${variedad.precio}</p>
                              <p id="cantidad${variedad.id}">Cantidad: ${variedad.cantidad}</p>
                              <button id="eliminar${variedad.id}" class="boton-eliminar">Eliminar</button>            `
          
          
               contenedorCarrito.appendChild(div)
               console.log(carritoCompras)
          }else {
               contenedorCarrito.innerHTML = ``
               variedad.cantidad +=1
               let div = document.createElement('div')
               div.classList.add('productoEnCarrito')
               div.innerHTML =
                              ` 
                              <p>${variedad.nombre}</p>
                              <p>Precio: ${variedad.precio}</p>
                              <p id="cantidad${variedad.id}">Cantidad: ${variedad.cantidad}</p>
                              <button id="eliminar${variedad.id}" class="boton-eliminar">Eliminar</button>            `
          
          
               contenedorCarrito.appendChild(div)
               console.log(carritoCompras)
          }
          //carritoCompras.push(variedad)
          //variedad.cantidad = 1
          //let div = document.createElement('div')
          //div.classList.add('productoEnCarrito')
          //div.innerHTML =
          //               ` 
          //               <p>${variedad.nombre}</p>
          //               <p>Precio: ${variedad.precio}</p>
          //               <p id="cantidad${variedad.id}">Cantidad: ${variedad.cantidad}</p>
          //               <button id="eliminar${variedad.id}" class="boton-eliminar">Eliminar</button>            `
     //
     //
          //contenedorCarrito.appendChild(div)
          //console.log(carritoCompras)
     }

     renderProductoCarrito()
}