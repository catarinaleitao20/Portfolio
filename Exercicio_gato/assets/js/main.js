
function button_donated(){
	let value_donate = document.getElementById('value_donate');
	//adiciona a classe button_donated ao botão com o ID anima
	value_donate.classList.add('donated');
	alert('Thank you for the donation!');
	value_donate.innerHTML='Já doou';
}


let botao = document.getElementById ('value_donate');
botao.addEventListener('click', button_donated);

