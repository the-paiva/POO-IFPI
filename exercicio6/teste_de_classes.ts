// Arquivo referente aos testes pedidos pela questão 05


import { Conta, Cliente, Banco } from "./banco";


// Teste da classe Conta, criada no arquivo banco.ts
function testarClasseConta(): Conta[]
{
    console.log('=== Testes da Classe Conta ===');
    const conta1 = new Conta('001', 1000);
    const conta2 = new Conta('002', 2000);

    conta1.depositar(500);
    console.log(`Saldo após depósito: ${conta1.saldo}`); // Esperado: 1500

    conta1.sacar(300);
    console.log(`Saldo após saque: ${conta1.saldo}`); // Esperado: 1200

    conta1.transferir(conta2, 200);
    console.log(`Saldo Conta1 após transferência: ${conta1.saldo}`); // Esperado: 1000
    console.log(`Saldo Conta2 após receber transferência: ${conta2.saldo}`); // Esperado: 2200

    return [conta1, conta2];
}


// Teste da classe Cliente, criada no arquivo banco.ts
function testarClasseCliente(conta1: Conta, conta2: Conta): Cliente
{
    console.log('\n=== Testes da Classe Cliente ===');
    const cliente1 = new Cliente('João Silva', '12345678900', new Date('1985-05-15'));
    cliente1.id = 1;
    console.log(`Cliente criado: Nome = ${cliente1.nome}, CPF = ${cliente1.cpf}`);

    cliente1.adicionarConta(conta1);
    cliente1.adicionarConta(conta2);
    const contasCliente1 = cliente1.listarCopiaContas();
    console.log(`Contas associadas ao cliente: ${contasCliente1.map(c => c.numero).join(', ')}`); // Esperado: 001, 002

    return cliente1;
}


// Teste da classe Banco, criada no arquivo banco.ts
function testarClasseBanco([conta1, conta2]: Conta[], cliente1: Cliente): void
{
    console.log('\n=== Testes da Classe Banco ===');
    const banco = new Banco();

    // Inserindo contas no banco
    banco.inserirConta(conta1);
    banco.inserirConta(conta2);
    console.log(`Total de contas no banco: ${banco.obterQuantidadeDeContas()}`); // Esperado: 2

    // Inserindo cliente no banco
    banco.inserirCliente(cliente1);
    console.log(`Cliente inserido com ID: ${cliente1['id']}`); // Esperado: 1

    // Associando conta ao cliente
    banco.associarContaCliente('001', '12345678900');
    banco.associarContaCliente('002', '12345678900');
    console.log(`Saldo total do cliente: ${banco.totalizarSaldoCliente('12345678900')}`); // Esperado: 6400

    // Testando operações no banco
    banco.sacar('001', 200);
    console.log(`Saldo após saque via banco: ${conta1.saldo}`); // Esperado: 800

    banco.depositar('001', 100);
    console.log(`Saldo após depósito via banco: ${conta1.saldo}`); // Esperado: 900

    banco.transferir('001', '002', 100);
    console.log(`Saldo Conta1 após transferência via banco: ${conta1.saldo}`); // Esperado: 800
    console.log(`Saldo Conta2 após transferência via banco: ${conta2.saldo}`); // Esperado: 2300

    // Testando estatísticas do banco
    console.log(`Total de dinheiro no banco: ${banco.obterTotalDinheiroDepositado()}`); // Esperado: 3100
    console.log(`Média do saldo das contas no banco: ${banco.calcularMediaSaldoContas()}`); // Esperado: 1550

    console.log('\n=== Todos os testes concluídos ===');
}


function main(): void
{
    let [conta1, conta2]: Conta[] = testarClasseConta();
    let cliente1: Cliente = testarClasseCliente(conta1, conta2);
    testarClasseBanco([conta1, conta2], cliente1);
}


main();
