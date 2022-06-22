class Empanadas {
    constructor(nombre) {
        this.id = creandoId()
        this.nombre = nombre.toUpperCase()
        this.precio = 28
        this.precioConiva = function(){
        let pf = this.precio * IVA
        return pf.toFixed(2)
        }
    }
}

function chango(){
    carrito.push(new Empanadas("verduras"))
    carrito.push(new Empanadas("chorizo a la pomarola"))
    carrito.push(new Empanadas("acelga con salsa blanca"))
    listarProductos(carrito)
}
function stock(){
    variedad.push(new Empanadas("carne"))
    variedad.push(new Empanadas("roquefort"))
    variedad.push(new Empanadas("pollo"))
    variedad.push(new Empanadas("pollo con verdeo y salsa blanca"))
    variedad.push(new Empanadas("bondiola a la cerveza"))
    variedad.push(new Empanadas("pollo con miel y limón"))
    listarProductos()
}
// function precioConiva(){
//     let pf = .precio * IVA
//     return pf.toFixed(2)
// }