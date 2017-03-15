let dataString = '17-05-2016';

let data = new Date(dataString.split('-').reverse().join('/'));
console.log(data);

//-----------------

let lista1 = ['banana', 'laranja', 'mamão'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

lista1.push(...lista2);

//--------------
let numeros5 = numeros.map((item, index) => (index%2)>0 ? item*2 : item);

//------------
numeros = [10,30];
console.log(somaDoisNumeros(...numeros));

//-------------
class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}




//------------ métodos estáticos e métodos não estáticos
class ConversorXML {

    static converte(objeto) {
        // converte um objeto em XML
    }
}
//Agora, vamos criar uma instância desta classe e chamar o método converte:

let conversor = new ConversorXML();
conversor.converte({nome: 'Guaraci', idade: 40});
//Teste este código no console.


class Pessoa {

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobreNome = sobrenome;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    static metodoStaticoQualquer() {
        console.log('Método estático chamado');
    }

}
//E antes do ES6. Como implementávamos algo semelhante a métodos estáticos? Vejamos um exemplo:

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// método de instância
Pessoa.prototype.obterNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// declarando equivalente a método estático

Pessoa.metodoStaticoQualquer = function() {

    console.log('Método estático chamado');

};



var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

var aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; })
    .map(function(prova) { return prova.aluno.nome;});

// Reduce

let numeros = [1, 2, 3, 4];
let resultado = numeros.reduce(function(total, num) {
    return total * num;
}, 1);

let numeros = [1,2,3,4];

let resultado = numeros.reduce((anterior, atual) => anterior + atual);
alert(resultado);
//O resultado é 10. Contudo, muitas vezes queremos começar a operação considerando um valor de inicialização. Por exemplo, queremos realizar a mesma operação, só que dessa vez, queremos começar com o valor 5.

let resultado2 = numeros.reduce((anterior, atual) => anterior + atual, 5);
alert(resultado2);
//Desta vez, o resultado final é 15!

//Sendo assim, nada nos impede de fazer o primeiro reduce passando 0:

let numeros = [1,2,3,4];

let resultado = numeros.reduce((anterior, atual) => anterior + atual, 0);
alert(resultado);
//O resultado será 10 também. Mas será que vale a pena passar o segundo parâmetro da função reduce já que neste caso ele não faz diferença? Tudo vai depender do seu gosto.


numeros.reduce(function(total,num) {
    return total * num;
}, 1);

numeros.reduce((total, num) => total * num, 1);

let dobro = numeros.map(num => num * 2);
let metade = numeros.map(num => num/2);
let raiz = numeros.map(num => Math.sqrt(num));

//---- Herança

class Funcionario {

    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    } 
}

class Secretaria extends Funcionario {

    constructor(nome) {
        super(nome);
    }

    atenderTelefone() {
        console.log(`${this._nome} atendendo telefone` );
    }
}

//Ou

class Secretaria extends Funcionario {

    // não precisei adicionar constructor e nem chamar super!

    atendeTelefone() {
        console.log(`${this._nome} atendendo telefone` );
    }
}

//Recebemos o erro:

//Uncaught ReferenceError: this is not defined
//Quando temos um construtor na classe filha que recebe uma quantidade de parâmetros diferentes do construtor da classe pai, para que o this seja inicializado com um valor, precisamos chamar o construtor da classe pai, passando os parâmetros que ela precisa. Corrigindo nosso código:

class Secretaria extends Funcionario {

    // Errado pois o super é chamado antes
    constructor(nome, funcionario) {
        super(nome); // cuidado, tem que ser a primeira instrução!
        this._funcionario = funcionario;
    }

    // certo
    constructor(nome, funcionario) {
        this._funcionario = funcionario; // this ainda não foi inicializado
        super(nome); 
    }

    atenderTelefone() {
        console.log(`${this._nome} atendendo telefone` );
    }
}