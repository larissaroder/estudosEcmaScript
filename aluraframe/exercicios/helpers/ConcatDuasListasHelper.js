class ConcatDuasListasHelper {

	_exibirNoConsole(lista) {
    	lista.forEach(item => console.log(item));
	}
	concatDuasListas(lista1, lista2) {
		this._exibirNoConsole([].concat(lista1, lista2));
	}
}