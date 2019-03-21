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

