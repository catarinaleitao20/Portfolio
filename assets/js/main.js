//Seleciona o 3ºtrabalho
function terceiro_trabalho(){
	let trabalho=document.querySelectorAll('.galeria')[2];
	return trabalho;
}

//Seleciona a 2ºentrada do menu
function segundo_menu(){
	let segunda=document.querySelectorAll('.nav-bar li')[1];
	return segunda;
}

//Seleciona a entrada do menu que esteja ativa
function active(){
	let menu_ativo=document.querySelector('.nav-bar .active');
	return menu_ativo;
}


//Seleciona o titulo do cabeçalho
function titulo(){
	let titulo_head=document.querySelector('.header h1');
	return titulo_head;
}

function cabecalho(){
	let cab=document.querySelector('.header');
	return cab;
}


//Seleciona o rodapé
function rodape(){
	let rodape_sel=document.querySelector('.footer');
	return rodape_sel;	
}

//Seleciona o icone mail do rodapé
function i_mail(){
	let mail=document.querySelectorAll('.footer a .social-media')[1];
	return mail;
}

//Seleciona o título do item para o 6ºtrabalho
function titulo_item(){
	let titulo=document.querySelectorAll('.galeria .descr')[5];
	return titulo;
}

//Seleciona a imagem de perfil da página Sobre
function about_img(){
	let image=document.querySelector('.about .imagem-perfil');
	return image;
}

//Seleciona item de entrada de blog
function entrada_blog(){
	let entrada=document.querySelector('.noticias-item');
	return entrada;
}

//Seleciona a data do 5ºartigo
function data_quinto(){
	let noticia=document.querySelectorAll('.noticias li')[4];
	let data=noticia.querySelector('.date');

	return data;
}

//Seleciona Imagem do primeiro artigo
function img_primeiro(){
	let img=document.querySelector('.noticias-image');
	return img;
}

let trabalhos=[
	{
		nome:'Algarve Nature',
		imagem:'assets/images/landing_page.png',
		link:'nature_algarve/index.html',
		data:'11/03/2019',
	},

	{
		nome:'DExercicio 1',
		imagem:'assets/images/ex1.jpg',
		link:'exercicio1/ex1.html',
		data:'11/03/2019',

	},

	{	
		nome:'CExercicio 2',
		imagem:'assets/images/ex2.png',
		link:'exercicio2/exercicio2.html',
		data:'11/03/2019',
	},	

	{
		nome:'BExercicio 3',
		imagem:'assets/images/ex3.png',
		link:'exercicio3/ex3.html',
		data:'11/03/2019',
	},

	{
		nome:'ZSite',
		imagem:'assets/images/ex4.png',
		link:'exercicio4/ex4.html',
		data:'11/03/2019',
	},

	{
		nome:'Exercicio 5',
		imagem:'assets/images/ex5.png',
		link:'exercicio5/ex5.html',
		data:'11/03/2019',
	}
]

let noticias=[
	{
		imagem:'assets/images/aq.jpg',
		data:'11/03/2019',
		titulo:'Android Q',
		link:'noticia1.html',
		button:'+',
	},

	{
		imagem:'assets/images/vinho.jpg',
		data:'11/03/2019',
		titulo:'Garrafa de vinho para o Espaço',
		link:'noticia2.html',
		button:'+',
	},

	{
		imagem:'assets/images/800.jpeg',
		data:'11/03/2019',
		titulo:'lorem ipsum dolor sit amet',
		link:'noticia2.html',
		button:'+',
	},

	{
		imagem:'assets/images/aq.jpg',
		data:'15/03/2019',
		titulo:'Noticia1',
		link:'noticia1.html',
		button:'+',
	},

]

let galerias = document.getElementsByClassName('galerias');
if (galerias.length > 0){
	let galeria = galerias[0];
	for (let i = 0; i < 6; i++) {
		
		let trabalho = trabalhos[i];

		setTimeout(
			function() {

				//console.log('Trabalho: '+trabalho.nome+' '+' - '+trabalho.data)
				galeria.innerHTML = galeria.innerHTML+`
					<div class="galeria">
						<a href="${trabalho.link}"><img src="${trabalho.imagem}"></a>
						<p class="date">${trabalho.data}</p>
						<hr>
						<div class="descr">${trabalho.nome}</div>
					</div>
				`;
			},
			250*i
		);

	}
}

let noticia_containers = document.getElementsByClassName('noticias');
if (noticia_containers.length > 0){
	let noticia_container = noticia_containers[0];
	for (let i = 0; i < noticias.length; i++) {
		
		let noticia = noticias[i];

		setTimeout(
			function() {
				//console.log('Trabalho: '+trabalho.nome+' '+' - '+trabalho.data)
				noticia_container.innerHTML = noticia_container.innerHTML+`
					<div class="noticia">
							<div class="noticias-image">
								<img src="${noticia.imagem}">
							</div>

							<div class="noticia-conteudo">
								 <p class="date">${noticia.data}</p>
								 <hr>
				        		 <p> ${noticia.titulo} <a href="noticia1.html"> <button class="${noticia.link}">+</button></a></p>
      						</div>
						</div>
				`;
			},
			250*i
		);

	}
}

let changeSortSelect = document.getElementById ('selected');
if(changeSortSelect != null){
	document.addEventListener('change',function(){
		let saveSelect = changeSortSelect.value;
		let sortProperty;
		if (saveSelect==='val_nome'){
			sortProperty = 'nome';
		} else if (saveSelect === 'val_data'){
			sortProperty='data';
		}
		

		trabalhos.sort(function(a, b){
			if (a[sortProperty] > b[sortProperty]){
				return 1;
			}
			
			else{
				return -1;
			}
		})
		console.log(trabalhos);
	})

}

