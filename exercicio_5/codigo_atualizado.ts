// Arquivo referente às implementações e testes propostos da 1ª até a 5ª Questão do Exercício 5

class Conta{
    id: number;
    nomeDoCliente: string;
    numero: string;
    saldo: number;

    constructor(id: number, nomeDoCliente: string, numero: string, saldo: number) {
        this.id = id;
        this.nomeDoCliente = nomeDoCliente;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}


class Banco {
    contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserir(conta: Conta): void {
        if (this.contas.some(c => c.id === conta.id || c.numero === conta.numero)) {
            console.log("Conta com o mesmo id ou numero já existe.");
            return;
        }

        this.contas.push(conta);
    }

    consultar(numero: string): Conta | undefined {
        return this.contas.find(conta => conta.numero === numero);
    }

    inserirCliente(cliente: Cliente): void {
        if (this.clientes.some(c => c.id === cliente.id || c.cpf === cliente.cpf)) {
            console.log("Cliente com o mesmo id ou cpf já existe.");
            return;
        }

        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const cliente = this.consultarCliente(cpfCliente);
        const conta = this.consultar(numeroConta);

        if (!cliente || !conta) {
            console.log("Cliente ou conta não encontrados.");
            return;
        }

        if (conta.nomeDoCliente && conta.nomeDoCliente !== cliente.nome) {
            console.log("Esta conta já está associada a outro cliente.");
            return;
        }

        const contaJaAssociada = cliente.contas.some(c => c.numero === conta.numero);

        if (contaJaAssociada) {
            console.log("Conta já associada ao cliente.");
        } else {
            cliente.contas.push(conta);
            conta.nomeDoCliente = cliente.nome;
            console.log(`Conta ${numeroConta} associada ao cliente ${cpfCliente}.`);
        }
    }

    listarContasCliente(cpf: string): Conta[] {
        const cliente = this.consultarCliente(cpf);

        if (!cliente) {
            console.log("Cliente não encontrado.");
            return [];
        }

        return cliente.contas;
    }

    totalizarSaldoCliente(cpf: string): number {
        const cliente = this.consultarCliente(cpf);

        if (!cliente) {
            console.log("Cliente não encontrado.");
            return 0;
        }

        return cliente.contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    inserirConta(conta: Conta): void {
        if (this.contas.some(c => c.id === conta.id || c.numero === conta.numero)) {
            console.log("Conta com o mesmo id ou numero já existente.");
            return;
        }
        this.contas.push(conta);
    }
}


class Cliente{
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}


function main(): void{
    let banco: Banco = new Banco();

    // Teste 1: Inserir novas contas

    banco.inserir(new Conta(1, 'Ely', '111-1', 100));  // Conta válida
    banco.inserir(new Conta(2, 'Miranda', '222-2', 200));  // Conta válida
    banco.inserir(new Conta(1, 'Lucas', '333-3', 500));  // Conta com ID duplicado
    banco.inserir(new Conta(3, 'Lucas', '222-2', 500));  // Conta com número duplicado

    // Teste 2: Inserir novos clientes

    // Cliente válido
    let cliente1 = new Cliente(1, 'Ely', '12345678900', new Date('1990-01-01'));
    banco.inserirCliente(cliente1);

    // Cliente válido
    let cliente2 = new Cliente(2, 'Miranda', '98765432100', new Date('1985-05-10'));
    banco.inserirCliente(cliente2);

    banco.inserirCliente(new Cliente(1, 'Lucas', '12345678900', new Date('1987-03-15')));  // Cliente com CPF duplicado
    banco.inserirCliente(new Cliente(2, 'Maria', '12345678901', new Date('1992-07-20')));  // Cliente com ID duplicado

    // Teste 3: Associar conta a cliente

    banco.associarContaCliente('111-1', '12345678900');  // Associar conta válida
    banco.associarContaCliente('222-2', '98765432100');  // Associar conta válida
    banco.associarContaCliente('222-2', '12345678900');  // Conta já associada ao cliente

    // Teste 4: Listar contas de um cliente

    console.log("Contas do cliente Ely:", banco.listarContasCliente('12345678900'));  // Deve listar contas de Ely
    console.log("Contas do cliente Miranda:", banco.listarContasCliente('98765432100'));  // Deve listar contas de Miranda
    console.log("Contas do cliente Maria:", banco.listarContasCliente('12345678901'));  // Cliente sem contas

    // Teste 5: Totalizar saldo de um cliente

    console.log("Total de saldo do cliente Ely:", banco.totalizarSaldoCliente('12345678900'));  // Deve somar saldo das contas de Ely
    console.log("Total de saldo do cliente Miranda:", banco.totalizarSaldoCliente('98765432100'));  // Deve somar saldo das contas de Miranda
    console.log("Total de saldo do cliente Maria:", banco.totalizarSaldoCliente('12345678901'));  // Deve retornar 0, pois Maria não tem contas

    // Teste 6: Consultar conta

    console.log("Consulta de conta 111-1:", banco.consultar('111-1'));  // Conta existente
    console.log("Consulta de conta 333-3:", banco.consultar('333-3'));  // Conta não existente    
}

main();
