const $imagen = document.querySelector('.imagen img')
const $button = document.getElementById('escojer')


$imagen.addEventListener('click',elejir)
$imagen.addEventListener('touch',elejir)
$button.addEventListener('click', elejir)

function elejir() {
	let fichas = ['blanco.png', 'negro.png']
	let contador = 0

	const interval = setInterval(()=>{
		$imagen.src = fichas[contador]
		if(contador == 1){
			contador = 0;
		}else{
			contador = 1;
		}

	},100)
	
	setTimeout(()=>{
		clearInterval(interval)
		let elejido = aleatorio(0,1)
		$imagen.src= fichas[elejido]
		console.log(elejido)
	},2000)
}

function aleatorio(min,max) {
	return Math.round(Math.random() * (max - min)) + min
}