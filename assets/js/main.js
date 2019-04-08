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
		descr:'Landing Page',
		link:'nature_algarve/index.html',
		data:'2019/12/11',
		botao:'Read More',
	},

	{
		nome:'DExercicio 1',
		imagem:'assets/images/ex1.jpg',
		descr:'The Civil Service',
		link:'exercicio1/ex1.html',
		data:'2017/07/27',
		botao:'Read More',

	},

	{	
		nome:'CExercicio 2',
		imagem:'assets/images/ex2.png',
		descr:'Exercicio dos estilos',
		link:'exercicio2/exercicio2.html',
		data:'2018/04/22',
		botao:'Read More',

	},	

	{
		nome:'BExercicio 3',
		imagem:'assets/images/ex3.png',
		descr:'MPS coders group',
		link:'exercicio3/ex3.html',
		data:'2014/11/20',
		botao:'Read More',
	},

	{
		nome:'ZSite',
		imagem:'assets/images/ex4.png',
		descr:'Site',
		link:'exercicio4/ex4.html',
		data:'2018/12/08',
		botao:'Read More',
	},

	{
		nome:'Exercicio 5',
		imagem:'assets/images/ex5.png',
		descr:'Texto com animação',
		link:'exercicio5/ex5.html',
		data:'2019/10/03',
		botao:'Read More',
	}
]

let noticias=[
	{
		imagem:'assets/images/aq.jpg',
		data:'11/03/2019',
		nome:'Android Q',
		link:'noticia1.html',
		botao:'Read More',
	},

	{
		imagem:'assets/images/vinho.jpg',
		data:'11/03/2019',
		nome:'Garrafa de vinho para o Espaço',
		link:'noticia2.html',
		botao:'Read More',
	},

	{
		imagem:'assets/images/800.jpeg',
		data:'11/03/2019',
		nome:'lorem ipsum dolor sit amet',
		link:'noticia2.html',
		botao:'Read More',
	},

	{
		imagem:'assets/images/aviao.jpeg',
		data:'27/03/2019',
		nome:'Drones para prevenir incêndios',
		link:'noticia1.html',
		botao:'Read More',
	},

]

let servicos =[
	{
		imagem: 'https://placeimg.com/280/280/tech?t=1553861338545',
		titulo: 'Web Development',
		descricao: 'ipsum dolor amet pork belly.',
		botao: 'Read More',
	},

	{
		imagem: 'https://placeimg.com/280/280',
		titulo: 'Web Designer',
		descricao: 'ipsum dolor amet pork belly.',
		botao: 'Read More',
	},

	{
		imagem: 'https://placeimg.com/280/280/tech',
		titulo: 'Front-End Developer',
		descricao: 'ipsum dolor lorem.',
		botao: 'Read More',
	},

]



function renderGallery(){
	let galerias = document.getElementsByClassName('galerias');
	if (galerias.length > 0){
		let tilegallery = galerias[0];
		//limpar o contentor antes de inserir os elementos
		tilegallery.innerHTML = '';
		//adiciona elemento a representar
		for (let i = 0; i < trabalhos.length; i++) {
			let trabalho = trabalhos[i];

			setTimeout(
				function() { 

					tilegallery.innerHTML = tilegallery.innerHTML+`
						<div class="tilegallery">
						<img src="${trabalho.imagem}">
						<div class="texto">
							<h2 class="animate-text"> ${trabalho.nome}</h2>
							<p class="animate-text">${trabalho.descr}</p>
							<p class="animate-text">${trabalho.data}</p>
							<a href="${trabalho.link}" class="button1">${trabalho.botao}</a>
						</div>
					</div>
					`;
				},
				250*i
			);

		}
	}
} 

renderGallery();

function renderBlog(){

	let noticia_containers = document.getElementsByClassName('noticias');
	if (noticia_containers.length > 0){
		let noticia_container = noticia_containers[0];

		//limpar o contentor antes de inserir os elementos
		noticia_container.innerHTML = '';
		//adiciona elemento a representar
		for (let i = 0; i < noticias.length; i++) {
			
			let noticia = noticias[i];

			setTimeout(
				function() {
					noticia_container.innerHTML = noticia_container.innerHTML+`
						<div class="tilenoticia">
						<img src="${noticia.imagem}">
						<div class="texto">
							<h2 class="animate-text"> ${noticia.nome}</h2>
							<p class="animate-text"></p>
							<p class="animate-text">${noticia.data}</p>
							<a href="${noticia.link}" class="button1">${noticia.botao}</a>
						</div>
					</div>
					`;
				},
				250*i
			);

		}
	}
}
renderBlog();

function renderServices(){
	//document.getElementsByClass retorna uma lista 
	let servico_containers = document.getElementsByClassName('wrap');
	if (servico_containers.length > 0){
		let servico_container = servico_containers[0];

		//limpar o contentor antes de inserir os elementos
		servico_container.innerHTML='';
		
		//adiciona elemento a representar
		for(let i = 0; i < servicos.length; i++){
			let servico = servicos[i];
			setTimeout(
				function(){
					servico_container.innerHTML = servico_container.innerHTML+ `
						<div class="tile">
						<img src="${servico.imagem}">
						<div class="texto">
							<h2 class="animate-text"> ${servico.titulo}</h2>
							<p class="animate-text">${servico.descricao}</p>
							<a href="" class="button1">${servico.botao}</a>
						</div>
					</div> 
					`;
				},
				250*i
			);
		}
	}
}
renderServices();

let changeSortSelect = document.getElementById ('selected');
if(changeSortSelect != null){
	document.addEventListener('change',function(){
		let saveSelect = changeSortSelect.value;
		if (saveSelect==='nome_asc'){

			trabalhos.sort(function(trab_a, trab_b){
				if (trab_a.nome > trab_b.nome){
					return 1;
				}
				
				else{
					return -1;
				}
			})
		}else if (saveSelect === 'nome_desc'){
			trabalhos.sort(function(trab_a, trab_b){
				if (trab_a.nome < trab_b.nome){
					return 1;
				}
				
				else
					return -1;
			})
			
		} else if (saveSelect === 'data_asc'){
			trabalhos.sort(function(trab_a, trab_b){
				if (trab_a.data > trab_b.data){
					return 1;
				}
				
				else
					return -1;
			})
			
		}else if(saveSelect === 'data_desc'){
			trabalhos.sort(function(trab_a, trab_b){
				if (trab_a.data < trab_b.data){
					return 1;
				}
				else
					return -1;
			})
		}	

	renderGallery();
	})
}

let changeSortSelectNot = document.getElementById ('selectedNot');
if(changeSortSelectNot != null){
	document.addEventListener('change',function(){
		let saveSelect = changeSortSelectNot.value;
		if (saveSelect==='nomenot_asc'){

			noticias.sort(function(not_a, not_b){
				if (not_a.titulo > not_b.titulo){
					return 1;
				}
				
				else{
					return -1;
				}
			})
		}else if (saveSelect === 'nomenot_desc'){
			noticias.sort(function(not_a, not_b){
				if (not_a.titulo < not_b.titulo){
					return 1;
				}
				
				else
					return -1;
			})
			
		} else if (saveSelect === 'datanot_asc'){
			noticias.sort(function(not_a, not_b){
				if (not_a.data > not_b.data){
					return 1;
				}
				
				else
					return -1;
			})
			
		}else if(saveSelect === 'datanot_desc'){
			noticias.sort(function(not_a, not_b){
				if (not_a.data < not_b.data){
					return 1;
				}
				else
					return -1;
			})
		}	

	renderBlog();
	})
}

function fadeOut_ative(){
	let fade = document.getElementsByClassName('background-preloader');
	if(fade.length>0){
		fade[0].classList.add('fadeout');
	}
}

setTimeout(fadeOut_ative, 1600);

//Botão Submit
function notifyfade_inactive(){
	let notify_fadeOut = document.getElementsByClassName('notify_box');
	if (notify_fadeOut.length>0) {
		notify_fadeOut[0].classList.add('notifyfade');
	}
}

let b_submit = document.getElementsByClassName('form');
let notifyfade_active = document.getElementsByClassName('notify_box');
if(b_submit.length>0){
	b_submit[0].addEventListener('submit', function(event){
		event.preventDefault();
		notifyfade_active[0].classList.toggle('notifyfade');
			setTimeout(notifyfade_inactive, 5000);

	})
}

