conta1 = new ContaCorrente(200); 
conta2 = new ContaPoupanca(300); 
conta1.atualiza(2);
conta2.atualiza(3);
console.log(conta1.saldo); //202
console.log(conta2.saldo); //306