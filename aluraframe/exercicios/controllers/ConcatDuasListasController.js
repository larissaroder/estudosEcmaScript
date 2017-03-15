class ConcatDuasListasController {

	constructor() {
		let concat = new ConcatDuasListasHelper();
		let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
		let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
		concat.concatDuasListas(listaDeNomes1, listaDeNomes2);
	}
}