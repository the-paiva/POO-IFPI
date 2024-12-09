export class Conta {
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
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para sacar ${valor}. Saldo disponível: ${this.saldo}.`);
            return;
        }
        this.saldo -= valor;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

export class Cliente {
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

export class Banco {
    contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserirConta(conta: Conta): void {
        if (this.contas.some(c => c.id === conta.id || c.numero === conta.numero)) {
            console.log("Conta com o mesmo id ou número já existente.");
            return;
        }
        this.contas.push(conta);
    }

    consultarConta(numero: string): Conta | undefined {
        return this.contas.find(conta => conta.numero === numero);
    }

    consultarPorIndice(numero: string): number {
        return this.contas.findIndex(conta => conta.numero === numero);
    }

    excluirConta(numero: string): void {
        const indice = this.consultarPorIndice(numero);
        if (indice === -1) {
            console.log(`Conta com número ${numero} não encontrada.`);
            return;
        }
        this.contas.splice(indice, 1);
    }

    atualizarConta(novaConta: Conta): void {
        const indice = this.consultarPorIndice(novaConta.numero);
        if (indice === -1) {
            console.log("Conta não encontrada!");
            return;
        }
        novaConta.id = this.contas[indice].id;
        this.contas[indice] = novaConta;
    }

    sacar(numero: string, valor: number): void {
        const conta = this.consultarConta(numero);
        if (!conta) {
            console.log("Conta não encontrada!");
            return;
        }
        conta.sacar(valor);
    }

    depositar(numero: string, valor: number): void {
        const conta = this.consultarConta(numero);
        if (!conta) {
            console.log("Conta não encontrada!");
            return;
        }
        conta.depositar(valor);
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        const contaOrigem = this.consultarConta(numeroOrigem);
        const contaDestino = this.consultarConta(numeroDestino);

        if (!contaOrigem || !contaDestino) {
            console.log("Conta de origem ou destino não encontrada!");
            return;
        }
        contaOrigem.transferir(contaDestino, valor);
    }

    inserirCliente(cliente: Cliente): void {
        if (this.clientes.some(c => c.id === cliente.id || c.cpf === cliente.cpf)) {
            console.log("Cliente com o mesmo id ou CPF já existente.");
            return;
        }
        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const cliente = this.consultarCliente(cpfCliente);
        const conta = this.consultarConta(numeroConta);

        if (!cliente || !conta) {
            console.log("Cliente ou conta não encontrados.");
            return;
        }

        if (conta.nomeDoCliente && conta.nomeDoCliente !== cliente.nome) {
            console.log("Esta conta já está associada a outro cliente.");
            return;
        }

        if (cliente.contas.some(c => c.numero === conta.numero)) {
            console.log("Conta já associada ao cliente.");
            return;
        }

        cliente.contas.push(conta);
        conta.nomeDoCliente = cliente.nome;
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

    transferirParaMultiplasContas(numeroOrigem: string, contasDestino: { numero: string, valor: number }[]): void {
        const contaOrigem = this.consultarConta(numeroOrigem);

        if (!contaOrigem) {
            console.log("Conta de origem não encontrada!");
            return;
        }

        for (const { numero, valor } of contasDestino) {
            const contaDestino = this.consultarConta(numero);

            if (!contaDestino) {
                console.log(`Conta destino ${numero} não encontrada. Transferência ignorada.`);
                continue;
            }

            if (valor <= 0) {
                console.log(`O valor da transferência para a conta ${numero} deve ser maior que zero. Ignorando.`);
                continue;
            }

            if (valor > contaOrigem.saldo) {
                console.log(`Saldo insuficiente para transferir ${valor} para a conta ${numero}. Saldo disponível: ${contaOrigem.saldo}.`);
                continue;
            }

            contaOrigem.transferir(contaDestino, valor);
            console.log(`Transferência de ${valor} para a conta ${numero} concluída com sucesso.`);
        }
    }

    retornarQuantidadeDeContas(): number {
        return this.contas.length;
    }

    retornarTotalDeDinheiro(): number {
        return this.contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    retornarMediaDeSaldo(): number {
        const quantidade = this.retornarQuantidadeDeContas();
        if (quantidade === 0) return 0; // Evita divisão por zero
        const total = this.retornarTotalDeDinheiro();
        return total / quantidade;
    }
}
