function eliminarProducto(){
    let aEliminar = prompt("¿Que producto desea eliminar?: ").toUpperCase()
    let resultado = variedades.indexOf(aEliminar)
    if (resultado === -1){
        alert("No se ha encontrado el producto: " + aEliminar)
    } else { 
        variedades.splice(resultado, 1)
        alert ("Se ha eliminado el producto")
    }
    listarProductos()
}

function buscarProducto(){
    let busqueda = prompt("Que producto desea buscar: ")
    let resultado = variedades.indexOf(busqueda)
    if (resultado === -1){
        alert("No se encontro el producto: " + busqueda)
    } else {
        alert("Se encontro el producto")
    }
}

function listarProductos(){
    variedades.forEach((variedad)=>{
        // console.table(variedad)
        const fila = 
                    `<tr>
                        <td>${creandoId()}</td>
                        <td>${variedad.nombre}</td>
                        <td>${variedad.precio}</td>
                    </tr>`
                document.querySelector("tbody").innerHTML += fila
    })
}

function creandoId(){
        return parseInt(Math.random()*10000) 
}


function agregarProducto(){
    let empNueva = prompt ("¿Que empanada nueva te gustaria que tengamos? : " ).toUpperCase()
    let resultado = variedades.includes(empNueva)
    if (resultado === false){
        variedades.push(empNueva)
       alert("Se agrego la empanada de: " + empNueva)
    }else {
       alert("No se puedo agregar su nueva opción")
    }
    listarProductos(variedades)
}
function cargarProductos(){
        listadoFrutas.innerHTML = ""
        for (const variedad of variedades){
            const li = document.createElement("li")
            li.style.backgroundColor="none"
            li.style.color= "white"
            li.className = "nombre"
            li.innerText = "Empanada de " + variedad.nombre
            li.id = variedad.nombre + "Producto"
            li.addEventListener("click", ()=>{
                agregarAlCarrito(`${variedad.nombre}`)
            })
            listadoFrutas.append(li)
    }
} 


function agregarAlCarrito(vari){
    //console.log(vari)
    carrito.push(vari)
    const li = document.createElement("li")
            li.style.backgroundColor="blue"
            li.style.color="white"
            li.className = vari.nombre + "enCarrito"
            li.innerText = "Empanada de " + vari.nombre
            li.id = vari.nombre + "Producto"
            li.addEventListener("dblclick", ()=>{
                removerDelCarrito(`${li.id}`)
            })
            listadoCarrito.append(li)
}   
function removerDelCarrito(vari){
    console.log(vari)
}




let tratando = document.getElementById("tratando")

function agregarTratando(){
    tratando.innerText=""   
    tratando.innerText = `<h1>Bienvenidos</h1>
                         <buttom>Haz click</buttom>`


}