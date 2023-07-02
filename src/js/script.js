let btnCadastrar = document.querySelectorAll('.btnCadastrar');
let containerBtnCadastrar = document.querySelectorAll('.container-btnCadastrar');

for (let i = 0; i < btnCadastrar.length; i++) {
	btnCadastrar[i].addEventListener('mouseover', function () {
		btnCadastrar[i].classList.remove('text-black');
		for (let j = 0; j < containerBtnCadastrar.length; j++) {
			containerBtnCadastrar[j].classList.remove('bg-orange-900/20');
			containerBtnCadastrar[j].classList.add('cor-saturada');
		}
	});

	btnCadastrar[i].addEventListener('mouseout', function () {
		for (let j = 0; j < containerBtnCadastrar.length; j++) {
			containerBtnCadastrar[j].classList.remove('cor-saturada');
			containerBtnCadastrar[j].classList.add('bg-orange-900/20');
		}
	});
}

const checkboxMobile = document.getElementById('checkbox-mobile')
const tela = document.getElementById('#screen')
let contador = 1

checkboxMobile.addEventListener('click', function () {
	if (contador % 2 == 0 & contador % 2 > 0) {
		console.log(contador)
	} 
	contador++
});