/* Crie uma função que receba como parâmetros um nome e um pronome de
tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”. */


// Retorna um pronome de acordo com um número digitado pelo usuário
string retornarPronome(string? nome, int idPronome)
{
    if (idPronome == 2)
    {
        return "Sra.";
    }

    return "Sr.";
}


// Escreve um menu informativo sobre os pronomes e seus números de ID equivalentes
void escreverMenuDeId()
{
    Console.WriteLine("\nDigite 1 para pronome MASCULINO");
    Console.WriteLine("Digite 2 para pronome FEMININO");
    Console.WriteLine("Digite qualquer número caso não queira especificar (Por padrão, masculino)");
    Console.Write("> ");
}


void main()
{
    Console.Write("Digite o seu nome: ");
    string? nome = Console.ReadLine();

    escreverMenuDeId();

    int idPronome = Convert.ToInt32(Console.ReadLine());
    string pronome = retornarPronome(nome, idPronome);

    Console.WriteLine($"Olá, {pronome} {nome}!");
}


main();
