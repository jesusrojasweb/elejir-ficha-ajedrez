

// function torneoInicioTemplate(cuerpo) {
//     return(`
//     <div class="torneo">
//         <h1>Todas las ligas</h1>
//         ${cuerpo}
//     </div>
//     `)
// }
function torneoInicioTemplate(cuerpo) {
    return(`
    <div class="torneo">
        <h1>Esta seccion esta en construccion</h1>
    </div>
    `)
}

function torneoListaLiasTemplate(ligas) {
    return(`
    <div class="ligas">
        ${ligas.map(liga=>(
            `<div class="liga" id="${liga.id}">
                <h3>${liga.nombre}</h3>
                <div class="dropdown">
                    <span class="fas fa-ellipsis-v"></span>
                    <div class="dropdown-content">
                        <a href="">Hello World!</p>
                    </div>
                </div>
            </div>`
        ))}
    </div>
    `)
}