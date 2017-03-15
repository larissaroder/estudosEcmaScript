class CodigoHelper {

	validarCodigo(codigo) {
		let expressao = /\D{3}-\D{2}-\d{2}/; 

    if(expressao.test(codigo)) {
          console.log( `O Codigo ${codigo} e valido!`);
      } else {
          console.log(`O Codigo ${codigo} e invalido!`);
      }
	}
}