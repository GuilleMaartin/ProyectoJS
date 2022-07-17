const variedades = [{id:creandoId(),img:'./imagenes/empanada-imagen2.jpg".jpg',nombre:`${"Empanada de "}`+"carne",   precio:28,cantidad: 1},
                    {id:creandoId(),img:'./imagenes/empanada-imagen2.jpg".jpg',nombre:`${"Empanada de "}`+"pollo",precio:28,cantidad: 1},
                    {id:creandoId(),img:'./imagenes/empanada-imagen2.jpg".jpg',nombre:`${"Empanada de "}`+"verdura",precio:28,cantidad: 1},
                    {id:creandoId(),img:'./imagenes/empanada-imagen2.jpg".jpg',nombre:`${"Empanada de "}`+"jamon y queso",precio:28,cantidad: 1},
                    {id:creandoId(),img:'./imagenes/empanada-imagen2.jpg".jpg',nombre:`${"Empanada de "}`+"bondiola",precio:28,cantidad: 1},
                    {id:creandoId(),img:'./imagenes/empanada-imagen2.jpg".jpg',nombre:`${"Empanada de "}`+"carne picante",precio:28,cantidad: 1},
                    {id:creandoId(),img:'./imagenes/empanada-imagen2.jpg".jpg',nombre:`${"Empanada de "}`+"carne suave",precio:28,cantidad: 1},
                    {id:creandoId(),img:'./imagenes/empanada-imagen2.jpg".jpg',nombre:`${"Empanada de "}`+"cuatro quesos",precio:28,cantidad: 1},                       ]
                   
function creandoId(){
    return parseInt(Math.random()*10000) 
}

export { variedades };