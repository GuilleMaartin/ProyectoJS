const numeros =[1, 2, 3, 4]

numeros.forEach((num) => {
    console.log(num)
})




function listarProductos(){
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i])
    }
}
function eliminarProducto(){

    let palabra = prompt("¿Que desea eliminar del carrito?")
    let indice = productos.indexOf(palabra)
    if (indice == -1){
        alert("No existe")
    }else{
        productos.splice(indice, 1)
        alert("Se ha eliminado")
    }
       listarProductos()
}
function buscarProducto(){
    let busqueda = prompt("Que producto desea buscar: ")
    let resultado = productos.includes(busqueda)
    if (resultado){

    }
}


function listarProductos(){
    console.table(variedad)
}

function creandoId(){
        return parseInt(Math.random()*10000) 
}


function agregarEmpanada(){
    debugger
    let id = creandoId()
    let nombre = prompt ("¿Que empanada nueva te gustaria que tengamos? : ")
    let precio = prompt("Precio de la empanada: ")
    let stock = prompt("Cuantas empandas: ")
    variedad.push(new Empanadas(id,nombre, precio, stock))
    console.table(variedad)
    listarProductos()
}

