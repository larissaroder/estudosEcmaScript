class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._negociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update(this._negociacoes);
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
	}

	adicionar(event){
		event.preventDefault();
		let data = DateHelper.textoParaData(this._inputData.value);
		let negociacao = new Negociacao(data,
										this._inputQuantidade.value,
										this._inputValor.value);

		this._negociacoes.adicionar(negociacao);
		this._negociacoesView.update(this._negociacoes);
		let dataFormatada = DateHelper.dataParaTexto(negociacao.data);
		console.log(this._negociacoes.negociacoes);
		this._mensagem.texto = "Negociação adicionada com sucesso."
		this._mensagemView.update(this._mensagem);
		this._limpar();

	}

	_limpar() {
		this._inputData.value = ''
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;
		this._inputData.focus();
	}
}