function changeTheme(){
	document.body.className='theme-purple';

}

//Podia usar também document.queryselector
let button = document.getElementsByClassName('theme-button')[0];
button.addEventListener('click', changeTheme);

function changeThemeRed(){
	document.body.className='theme-red';

}

//Podia usar também document.queryselector
let red = document.getElementsByClassName('theme-button-red')[0];
red.addEventListener('click', changeThemeRed);


function changeThemeGreen(){
	document.body.className='theme-green';
}


let green = document.getElementsByClassName('theme-button-green')[0];
green.addEventListener('click', changeThemeGreen);


function changeThemeBlue(){
	document.body.className='theme-blue';
}


let blue = document.getElementsByClassName('theme-button-blue')[0];
blue.addEventListener('click', changeThemeBlue);

function changeThemeYellow(){
	document.body.className='theme-yellow';
}


let yellow = document.getElementsByClassName('theme-button-yellow')[0];
yellow.addEventListener('click', changeThemeYellow);
