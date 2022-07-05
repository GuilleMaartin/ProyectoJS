class Producto {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.impFinal = precioconIva()
    }
} 
function stock(){
    variedades.push(new Producto(creandoId(),"carne"))
    variedades.push(new Producto(creandoId(),"roquefort"))
    variedades.push(new Producto(creandoId(),"pollo"))
    variedades.push(new Producto(creandoId(),"pollo con verdeo y salsa blanca"))
    variedades.push(new Producto(creandoId(),"bondiola a la cerveza"))
    variedades.push(new Producto(creandoId(),"pollo con miel y limón"))
    console.table(variedades)
}

//function precioconIva(){
//    return  * IVA;
//}