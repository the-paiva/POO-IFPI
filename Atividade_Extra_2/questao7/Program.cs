// Arquivo referente ao código da questão 7 da atividade extra 2


/*Implemente a questão do ControleDeAudio (questão 5) em outra linguagem que não
seja TypeScript.*/


// Escreve o menu do programa na tela
using questao7.classes;


// Mostra o menu principal do programa
void mostrarMenu()
{
    Console.Clear();
    Console.WriteLine("Caixa de Som - Dolby Atmos 7.1 Surround Cinema AI Remix Deluxe Edition");
    Console.WriteLine("\nDigite 1 para aumentar o volume");
    Console.WriteLine("Digite 2 para diminuir o volume");
    Console.WriteLine("Digite 3 para ler o volume");
    Console.WriteLine("Digite 4 para encerrar o programa");
}


// Pede um número inteiro para o usuário
int pedirInt(string textoDeInput)
{
    Console.Write(textoDeInput);
    string? input = Console.ReadLine();
    return int.TryParse(input, out int numero) ? numero : 0;
}


// Limpa a tela após o usuário pressionar ENTER
void enterParaLimparTela()
{
    Console.Write("\nPressione ENTER para continuar...");
    Console.ReadLine();
    Console.Clear();
}


void main()
{
    ControleDeAudio controlador1 = new();
    int opcao = 0;

    while (opcao != 4)
    {
        mostrarMenu();
        opcao = pedirInt("\n> ");

        switch (opcao)
        {
            case 1:
                controlador1.AumentarVolume();
                break;

            case 2:
                controlador1.DiminuirVolume();
                break;

            case 3:
                controlador1.LerVolume();
                enterParaLimparTela();
                break;

            case 4:
                Console.WriteLine("\nEncerrando o programa...");
                Thread.Sleep(2000);
                break;

            default:
                Console.WriteLine("\nOpção inválida!");
                enterParaLimparTela();
                break;
        }
    }
}

main();
