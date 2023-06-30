let btnCadastrar = document.querySelector('#btnCadastrar');
let containerBtnCadastrar = document.querySelector('#container-btnCadastrar');

btnCadastrar.addEventListener('mouseover', function () {
	btnCadastrar.classList.remove('text-black')
	containerBtnCadastrar.classList.remove('bg-orange-900/20')
	containerBtnCadastrar.classList.add('cor-saturada')
});
btnCadastrar.addEventListener('mouseout', function () {
	containerBtnCadastrar.classList.remove('cor-saturada')
	containerBtnCadastrar.classList.add('bg-orange-900/20')

});