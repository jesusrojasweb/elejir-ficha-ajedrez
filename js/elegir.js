handleTemplate(elegirTemplate)
const $imagenContainer = document.querySelector('.imagen')
const $imagen = document.querySelector('.imagen img')
const $button = document.getElementById('escojer')

elegir()

function elegir() {
	$imagen.addEventListener('click',handleElejir)
	$imagen.addEventListener('touch',handleElejir)
	$button.addEventListener('click', handleElejir)
}

function handleElejir() {
	let fichas = ['blanco', 'negro']
	let contador = 0

	$imagen.src = 'img/tabla.png'

	removerClasesElejir()

	const interval = setInterval(()=>{
		$imagenContainer.classList.add(fichas[contador])
		if(contador == 1){
			contador = 0;
		}else{
			contador = 1;
			$imagenContainer.classList.remove('negro')
		}

	},200)
	
	setTimeout(()=>{
		clearInterval(interval)
		removerClasesElejir()
		let elejido = aleatorio(0,1)
		$imagenContainer.classList.add(fichas[elejido])
	},2000)
}

function removerClasesElejir() {
	$imagenContainer.classList.remove('blanco')
	$imagenContainer.classList.remove('negro')
}

function elegirTemplate() {
    return(`
    <div class="escoger">
        <h1>Escoger Ficha</h1>
        <div class="imagen">
            <img src="img/peones.jpg" alt="ajedrez">
        </div>
        <button id="escojer" class="btn">Elegir</button>
        <img src="img/tabla.png" alt=""class="sinImagen">
    </div>
    `)
}