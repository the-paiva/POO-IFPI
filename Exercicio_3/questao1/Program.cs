// Crie uma função que recebe como parâmetro um número e retorna true se o número for par e false se for ímpar.


// Verifica se um determinado número inteiro é par ou ímpar, retornando o resultado como um valor booleano
bool ehPar(int numero)
{
    if (numero % 2 == 0)
    {
        return true;
    }

    return false;
}


void main()
{
    Console.Write("Digite um número inteiro: ");
    int numero = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine($"O número {numero} é par? -> {ehPar(numero)}");
}


main();
