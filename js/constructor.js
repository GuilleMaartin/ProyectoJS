class Empanadas {
    constructor(nombre) {
        this.id = creandoId()
        this.nombre = nombre
        this.precio = valor
        this.precioFinal = precioconIva(valor, IVA)
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
    console.table(variedad)
}

function precioconIva(valor, IVA){
    return valor * IVA;
}