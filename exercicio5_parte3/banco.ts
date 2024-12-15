class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente!: Cliente;

    constructor(numero: string, saldo: number) {
        this.id = 0;
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
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.id = 0;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}

class Banco {
    contas: Conta[];
    clientes: Cliente[];
    idClienteAtual: number;
    idContaAtual: number;

    constructor() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 0;
        this.idContaAtual = 0;
    }

    inserirConta(conta: Conta): void {
        conta.id = this.idContaAtual++;
        this.contas.push(conta);
    }

    consultarConta(numero: string): Conta | null {
        let conta = this.contas.find((conta) => conta.numero === numero);
        return conta || null;
    }

    consultarContaPorIndice(numero: string): number {
        let indiceProcurado = -1;

        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluirConta(numero: string): boolean {
        let indiceProcurado = this.consultarContaPorIndice(numero);

        if (indiceProcurado !== -1) {
            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
            return true;
        }
        return false;
    }

    alterar(conta: Conta): void {
        let contaProcurada = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada.saldo = conta.saldo;
        }
    }

    inserirCliente(cliente: Cliente): void {
        cliente.id = this.idClienteAtual++;
        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente | null {
        let cliente = this.clientes.find((cliente) => cliente.cpf === cpf);
        return cliente || null;
    }

    sacar(numero: string, valor: number): void {
        let contaProcurada = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let contaProcurada = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem = this.consultarConta(numeroOrigem);
        let contaDestino = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): boolean {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);

        if (contaProcurada && clienteProcurado) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
            return true;
        }

        return false;
    }

    jaExisteContaParaCliente(cliente: Cliente, conta: Conta): boolean {
        let jaExiste = false;

        if (conta.cliente != null) {
            if (conta.cliente.cpf === cliente.cpf) {
                jaExiste = true;
            } else {
                for (let contaAssociada of cliente.contas) {
                    if (contaAssociada.numero === conta.numero) {
                        jaExiste = true;
                    }
                }
            }
        }

        return jaExiste;
    }

    listarContasCliente(cpf: string): Conta[] {
        let clienteProcurado = this.consultarCliente(cpf);
        return clienteProcurado ? clienteProcurado.contas : [];
    }

    totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado = this.consultarCliente(cpf);
        let total = 0;

        if (clienteProcurado) {
            for (let conta of clienteProcurado.contas) {
                total += conta.saldo;
            }
        }

        return total;
    }

    obterQuantidadeDeContas(): number {
        return this.contas.length;
    }

    obterTotalDinheiroDepositado(): number {
        let total = 0;

        for (let conta of this.contas) {
            total += conta.saldo;
        }

        return total;
    }

    calcularMediaSaldoContas(): number {
        const quantidade = this.obterQuantidadeDeContas();
        return quantidade > 0 ? this.obterTotalDinheiroDepositado() / quantidade : 0;
    }

    mudarTitularidade(numeroConta: string, cpfNovoCliente: string): boolean {
        let conta = this.consultarConta(numeroConta);
        let novoCliente = this.consultarCliente(cpfNovoCliente);

        if (conta && novoCliente) {
            conta.cliente = novoCliente;
            return true;
        }

        return false;
    }
}

export { Conta, Cliente, Banco };
