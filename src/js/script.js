let btnCadastrar = document.querySelectorAll('.btnCadastrar');
let containerBtnCadastrar = document.querySelectorAll('.container-btnCadastrar');

btnCadastrar.addEventListener('mouseover', function () {
	for(let i = 0; i < btnCadastrar.length; i++) {
		btnCadastrar[i].classList.remove('text-black')
		containerBtnCadastrar[i].classList.remove('bg-orange-900/20')
		containerBtnCadastrar[i].classList.add('cor-saturada')
	}
});
btnCadastrar.addEventListener('mouseout', function () {
	for (let i = 0; i < BtnCadastrar.length; i++) {
		containerBtnCadastrar[i].classList.remove('cor-saturada')
		containerBtnCadastrar[i].classList.add('bg-orange-900/20')
	}
});