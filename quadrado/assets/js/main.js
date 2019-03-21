
function animatedSquare(){
	let square = document.getElementById('square');
	//adiciona a classe animate ao botão com o ID anima
	square.classList.add('animate');
}


let botao = document.getElementById ('anima_but');
botao.addEventListener('click', animatedSquare);

