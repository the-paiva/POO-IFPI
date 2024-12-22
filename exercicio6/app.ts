// Arquivo referente às implementações da questão 05


import prompt from "prompt-sync"; 
import { Conta, Cliente, Banco } from "./banco";


const input = prompt();


class SistemaBanco 
{
    private b: Banco = new Banco();
    

    public iniciar(): void 
    {
        let opcao: string = '';

        do
        {
            console.log('\nBem-vindo! Escolha uma opção:');
            console.log('Contas:');
            console.log('1 - Inserir    2 - Consultar  3 - Sacar');
            console.log('4 - Depositar  5 - Excluir  6 - Transferir');
            console.log('7 - Totalizações');
            console.log('Clientes:');
            console.log('8 - Inserir    9 - Consultar   10 - Associar');
            console.log('11 - Total aplicado por cliente');
            console.log('0 - Sair');
            opcao = input("Opção: ");

            switch (opcao) 
            {
                case "1":
                    this.inserirConta();
                    break;

                case "2":
                    this.consultarConta();
                    break;

                case "3":
                    this.sacar();
                    break;

                case "4":
                    this.depositar();
                    break;

                case "5":
                    this.excluirConta();
                    break;

                case "6":
                    this.transferir();
                    break;

                case "7":
                    this.totalizacoes();
                    break;

                case "8":
                    this.inserirCliente();
                    break;

                case "9":
                    this.consultarCliente();
                    break;

                case "10":
                    this.associarContaCliente();
                    break;

                case "11":
                    this.totalizarSaldoCliente();
                    break;

                case "0":
                    console.log("Saindo...");
                    break;

                default:
                    console.log("Opção inválida!");
            }

            input("Operação finalizada. Pressione <Enter> para continuar.");
        } while (opcao != "0");

        console.log("Aplicação encerrada.");
    }


    private inserirConta(): void 
    {
        console.log("\nCadastrar conta:");
        let numero: string = input('Digite o número da conta: ');
        let saldo: number = parseFloat(input('Digite o saldo inicial da conta: '));

        let conta: Conta = new Conta(numero, saldo);
        this.b.inserirConta(conta);

        console.log("Conta cadastrada com sucesso!");
    }


    private sacar(): void 
    {
        console.log("\nSaque:");
        let numero: string = input('Digite o número da conta: ');
        let valor: number = parseFloat(input('Digite o valor do saque: '));

        this.b.sacar(numero, valor);
        console.log("Saque realizado.");

        this.exibirExtrato(numero);
    }


    private depositar(): void 
    {
        console.log("\nDepósito:");
        let numero: string = input('Digite o número da conta: ');
        let valor: number = parseFloat(input('Digite o valor do depósito: '));

        this.b.depositar(numero, valor);
        console.log("Depósito realizado.");
        
        this.exibirExtrato(numero);
    }


    private transferir(): void 
    {
        console.log("\nTransferência:");
        let numeroOrigem: string = input('Digite o número da conta de origem: ');
        let numeroDestino: string = input('Digite o número da conta de destino: ');
        let valor: number = parseFloat(input('Digite o valor da transferência: '));

        this.b.transferir(numeroOrigem, numeroDestino, valor);
        console.log("Transferência realizada.");

        console.log("\nExtrato da conta de origem:");
        this.exibirExtrato(numeroOrigem);

        console.log("\nExtrato da conta de destino:");
        this.exibirExtrato(numeroDestino);
    }


    private consultarConta(): void 
    {
        console.log("\nConsultar conta:");
        let numero: string = input('Digite o número da conta: ');

        this.exibirExtrato(numero);
    }


    private exibirExtrato(numero: string): void 
    {
        const conta = this.b.consultarConta(numero);

        if (conta) 
        {
            const cliente = conta.cliente;

            console.log("\n=== Extrato da Conta ===");
            console.log(`ID: ${conta.id}`);
            console.log(`Número da conta: ${conta.numero}`);
            console.log(`Saldo: ${conta.saldo}`);

            if (cliente) 
            {
                console.log("\n=== Dados do Cliente ===");
                console.log(`ID: ${cliente.id}`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`CPF: ${cliente.cpf}`);
            } 
            else 
            {
                console.log("Cliente: Não associado.");
            }

            console.log("=========================\n");
        } 
        else 
        {
            console.log("Conta não encontrada para exibir extrato.");
        }
    }


    private excluirConta(): void
    {
        console.log("\nExcluir conta:");
        let numero: string = input('Digite o número da conta: ');

        this.b.excluir(numero);

        console.log("Conta excluída com sucesso!");
    }


    private totalizacoes(): void
    {
        console.log("\nTotalizações:");
        console.log(`Quantidade de contas: ${this.b.obterQuantidadeDeContas()}`);
        console.log(`Total depositado no banco: ${this.b.obterTotalDinheiroDepositado()}`);
        console.log(`Média de saldo das contas: ${this.b.calcularMediaSaldoContas()}`);
    }


    private inserirCliente(): void 
    {
        console.log("\nCadastrar cliente:");
        let nome: string = input('Digite o nome do cliente: ');
        let cpf: string = input('Digite o CPF do cliente: ');
        let dataNascimento: Date = new Date(input('Digite a data de nascimento (AAAA-MM-DD): '));

        let cliente: Cliente = new Cliente(nome, cpf, dataNascimento);
        this.b.inserirCliente(cliente);

        console.log("Cliente cadastrado com sucesso!");
    }


    private consultarCliente(): void
    {
        console.log("\nConsultar cliente:");
        let cpf: string = input('Digite o CPF do cliente: ');
        let cliente = this.b.consultarCliente(cpf);

        if (cliente)
        {
            console.log(`Cliente encontrado: ID ${cliente.id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);
        } 
        else
        {
            console.log("Cliente não encontrado.");
        }
    }


    private associarContaCliente(): void 
    {
        console.log("\nAssociar conta a cliente:");
        let numeroConta: string = input('Digite o número da conta: ');
        let cpfCliente: string = input('Digite o CPF do cliente: ');

        this.b.associarContaCliente(numeroConta, cpfCliente);

        console.log("Conta associada ao cliente com sucesso!");
    }


    private totalizarSaldoCliente(): void
    {
        console.log("\Totalizar saldo por cliente:");
        let cpfCliente: string = input('Digite o CPF do cliente: ');

        let total = this.b.totalizarSaldoCliente(cpfCliente);
        
        console.log("Total: " + total);
    }
}


const sistema = new SistemaBanco();
sistema.iniciar();


export {SistemaBanco}
