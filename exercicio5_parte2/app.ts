import prompt from "prompt-sync";
import { Conta, Banco, Cliente } from "./banco";

const textoDoMenu: string = `
Bem vindo
Digite uma opção:

Contas:
1 - Inserir 2 - Consultar 3 - Sacar
4 - Depositar 5 - Excluir 6 - Transferir
7 - Totalizações

Clientes:
8 - Inserir 9 - Consultar 10 - Associar
0 - Sair
`

function main(): void {
    let input = prompt();
    let b: Banco = new Banco();
    let opcao: string = '';

    do {
        console.log(textoDoMenu);
        opcao = input("Opção:").trim();

        switch (opcao) {
            case "0":
                console.log("Encerrando o programa.");
                break;
            case "1":
                inserirConta();
                break;
            case "2":
                consultarConta();
                break;
            case "3":
                sacar();
                break;
            case "4":
                depositar();
                break;
            case "5":
                excluirConta();
                break;
            case "6":
                transferir();
                break;
            case "7":
                totalizar();
                break;
            case "8":
                inserirCliente();
                break;
            case "9":
                consultarCliente();
                break;
            case "10":
                associarContaCliente();
                break;
            default:
                console.log("Opção inválida.");
        }

        if (opcao !== "0") {
            input("Operação finalizada. Pressione <enter> para continuar...");
        }
    } while (opcao !== "0");

    console.log("Aplicação encerrada");

    // Funções de Contas
    function inserirConta(): void {
        console.log("\nCadastrar conta\n");
        let id = Number(input('Digite o ID da conta:'));
        let numero = input('Digite o número da conta:');
        let saldoInicial = Number(input('Digite o saldo inicial:'));
        let conta = new Conta(id, '', numero, saldoInicial);
        b.inserirConta(conta);
    }

    function consultarConta(): void {
        let numero = input('Digite o número da conta para consulta:');
        let conta = b.consultarConta(numero);
        if (conta) {
            console.log(conta);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    function excluirConta(): void {
        let numero = input('Digite o número da conta para excluir:');
        b.excluirConta(numero);
    }

    function sacar(): void {
        let numero = input('Digite o número da conta para saque:');
        let valor = Number(input('Digite o valor do saque:'));
        b.sacar(numero, valor);
    }

    function depositar(): void {
        let numero = input('Digite o número da conta para depósito:');
        let valor = Number(input('Digite o valor do depósito:'));
        b.depositar(numero, valor);
    }

    function transferir(): void {
        let numeroOrigem = input('Digite o número da conta de origem:');
        let numeroDestino = input('Digite o número da conta de destino:');
        let valor = Number(input('Digite o valor da transferência:'));
        b.transferir(numeroOrigem, numeroDestino, valor);
    }

    function totalizar(): void {
        console.log(`Total de dinheiro em todas as contas: R$${b.retornarTotalDeDinheiro()}`);
        console.log(`Média de saldo de todas as contas: R$${b.retornarMediaDeSaldo()}`);
        console.log(`Quantidade total de contas: ${b.retornarQuantidadeDeContas()}`);
    }

    // Funções de Clientes
    function inserirCliente(): void {
        console.log("\nCadastrar cliente\n");
    
        let id = Number(input('Digite o ID do cliente:'));
        let nome = input('Digite o nome do cliente:');
        let cpf = input('Digite o CPF do cliente:');
        let dataNascimentoStr = input('Digite a data de nascimento (formato: YYYY-MM-DD):');
        let dataNascimento = new Date(dataNascimentoStr);
    
        if (isNaN(dataNascimento.getTime())) {
            console.log("Data inválida. Tente novamente.");
            return;
        }
    
        let cliente = new Cliente(id, nome, cpf, dataNascimento);
    
        b.inserirCliente(cliente);
    }
    
    function consultarCliente(): void {
        let cpf = input('Digite o CPF do cliente para consulta:');
        let cliente = b.consultarCliente(cpf);
        if (cliente) {
            console.log(cliente);
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    function associarContaCliente(): void {
        let numeroConta = input('Digite o número da conta para associar:');
        let cpfCliente = input('Digite o CPF do cliente para associar:');
        b.associarContaCliente(numeroConta, cpfCliente);
    }
}


main();
