function changeTheme(theme){
	document.body.className=theme;

}


//Podia usar também document.queryselector
let button = document.getElementsByClassName('theme-button')[0];
button.addEventListener('click', function(){
	changeTheme('theme-purple');
});

//Podia usar também document.queryselector
let red = document.getElementsByClassName('theme-button-red')[0];
red.addEventListener('click', function(){
	changeTheme('theme-red');
});

let green = document.getElementsByClassName('theme-button-green')[0];
green.addEventListener('click', function(){
	changeTheme('theme-green');
});

let blue = document.getElementsByClassName('theme-button-blue')[0];
blue.addEventListener('click', function(){
	changeTheme('theme-blue');
});

let yellow = document.getElementsByClassName('theme-button-yellow')[0];
yellow.addEventListener('click', function(){
	changeTheme('theme-yellow');
});
