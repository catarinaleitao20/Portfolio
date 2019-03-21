
/*function updateSkillset(texto){
	var skillset = document.getElementsByClassName('skillset');

	skillset[0].innerHTML = texto;
}

var bot = document.getElementById('enter');
bot.addEventListener('click', function() {
	updateSkillset('Helloooo');
});

var bot2 = document.getElementById('bye');
bot2.addEventListener('click',function() {
	updateSkillset('Good Byeee');
});
*/

/*//Mudar Nomes
function updateName(nome){
	let nome_element = document.getElementById('nome');

	nome_element.innerHTML = nome;
}

var nome1 = document.getElementById('bot1');
nome1.addEventListener('click', function() {
	updateName('Catarina');
});

var nome2 = document.getElementById('bot2');
nome2.addEventListener('click',function() {
	updateName('Marco');
});

var nome3 = document.getElementById('bot3');
nome3.addEventListener('click',function() {
	updateName('Estrela');
});

*/


function changeName(){
	let nome_input = document.getElementById('caixa');
	let novo_nome = nome_input.value;
	let elemento_nome = document.getElementById('nome');

	elemento_nome.innerHTML = novo_nome;
}

let botao = document.getElementById ('botao_enter');
botao.addEventListener('click', changeName);
