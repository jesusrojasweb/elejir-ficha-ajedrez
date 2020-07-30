const $featuringContainer = document.getElementById('featuring')
const $menu = document.querySelectorAll('.menu ul li a')

function handleTemplate(template) {
    const HTMLString = template()
    $featuringContainer.innerHTML = HTMLString;
}

function aleatorio(min,max) {
	return Math.round(Math.random() * (max - min)) + min
}

$menu[0].addEventListener('click', function (e){
	e.preventDefault()
	handleTemplate(elegirTemplate)
	elegir()
})

// $menu[1].addEventListener('click', function (e){
// 	e.preventDefault()
// 	handleTemplate(torneoInicioTemplate)
// })
