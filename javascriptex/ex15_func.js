let jogadores=[
	{
		numero: 21,
		posicao: 'medio',
		lesionado: false,
		nome: {
			primeiro: 'Pizzi',
			ultimo: 'Miguel'
		},
		foto: 'url',
		altura:1.77,
		idade: 30,
		equipas: ['Benfica', 'Deportivo', 'Espanhol']
	},

	{
		numero: 3,
		posicao: 'defesa',
		lesionado: false,
		nome: {
			primeiro: 'Grimaldo',
			ultimo: 'Miguel'
		},
		foto: 'url',
		altura:1.71,
		idade: 23,
		equipas: ['Benfica']
	},

	{
		numero: 11,
		posicao: 'medio',
		lesionado: false,
		nome: {
			primeiro: 'Cervi',
			ultimo: 'Franco'
		},
		foto: 'url',
		altura:1.65,
		idade: 24,
		equipas: ['Benfica']
	},

	{
		numero: 8,
		posicao: 'medio',
		lesionado: false,
		nome: {
			primeiro: 'Gabriel',
			ultimo: 'Miguel'
		},
		foto: 'url',
		altura:1.87,
		idade: 25,
		equipas: ['Benfica','Leganes']
	},

	{
		numero: 22,
		posicao: 'medio',
		lesionado: false,
		nome: {
			primeiro: 'Andres',
			ultimo: 'Samaris'
		},
		foto: 'url',
		altura:1.89,
		idade: 30,
		equipas: ['Benfica', 'Olympiacos', 'Panionios']
	},

	{
		numero: 79,
		posicao: 'avançado',
		lesionado: false,
		nome: {
			primeiro: 'Joao',
			ultimo: 'Felix'
		} ,
		foto: 'url',
		altura:1.80,
		idade: 19,
		equipas: ['Benfica']
	},

	{
		numero: 27,
		posicao: 'medio',
		lesionado: false,
		nome: {
			primeiro: 'Rafa',
			ultimo: 'Silva'
		} ,
		foto: 'url',
		altura:1.72,
		idade: 25,
		equipas: ['Benfica', 'Braga']
	},

	{
		numero: 79,
		posicao: 'avançado',
		lesionado: false,
		nome: { 
			primeiro: 'Joao',
			ultimo: 'Felix'
		},
		foto: 'url',
		altura:1.80,
		idade: 19,
		equipas: ['Benfica']
	},

	{
		numero: 79,
		posicao: 'avançado',
		lesionado: false,
		nome: {
		 primeiro: 'Joao', 
		 ultimo: 'Felix'
		},
		foto: 'url',
		altura:1.80,
		idade: 19,
		equipas: ['Benfica']
	},

	{
		numero: 10,
		posicao: 'avançado',
		lesionado: false,
		nome: {
			primeiro:'Jonas',
			ultimo: 'Pistolas'
		},
		foto: 'url',
		altura:1.81,
		idade: 35,
		equipas: ['Benfica']
	},

	{
		numero: 14,
		posicao: 'avançado',
		lesionado: false,
		nome: {
			primeiro: 'Seferovic',
			ultimo: 'Suiço'
		},
		foto: 'url',
		altura:1.89,
		idade: 26,
		equipas: ['Benfica']
	},
]


function chamaJogador(jogador){
	console.log('Chama-se o jogador: '+jogador.nome.primeiro+' '+jogador.nome.ultimo);
}

for (let i = 0; i < 11; i++) {
	
	let jogador = jogadores[i];
		
	chamaJogador(jogadores[i]);
}
