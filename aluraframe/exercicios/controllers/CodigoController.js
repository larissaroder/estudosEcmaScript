class CodigoController {

	constructor() {
		let helper = new CodigoHelper();
		helper.validarCodigo('GWZ-JJ-12'); // válido
		helper.validarCodigo('1X1-JJ-12'); // inválido
	}
}