// Arquivo referente ao código da questão 6 da atividade extra 2

/*Na questão sobre retângulos do exercício anterior, crie um método que retorna
verdadeiro ou falso se o retângulo é um quadrado.*/


using System.Globalization;
using questao6.models;


// Pede um valor do tipo double
double pedirDouble(string? mensagemDeInput)
{
    Console.Write(mensagemDeInput);
    return Convert.ToDouble(Console.ReadLine(), CultureInfo.InvariantCulture);
}


void main()
{
    Retangulo instanciaRetangulo = new()
    {
        L1 = pedirDouble("Digite o valor do primeiro lado do retângulo: "),
        L2 = pedirDouble("Digite o valor do segundo lado do retângulo: ")
    };

    if (instanciaRetangulo.EhQuadrado())
    {
        Console.WriteLine("\nO retângulo informado caracteriza um quadrado");
    }
    else
    {
        Console.WriteLine("\nO retângulo informado não caracteriza um quadrado");
    }
}

main();
