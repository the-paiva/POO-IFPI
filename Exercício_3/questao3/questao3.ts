// Arquivo referente à questão 3


/* Crie uma função que retorne os números de um array passados por parâmetro
separados por traço (-) no formato string. Para isso, use o método forEach dos
arrays. */


// Adiciona os números de uma lista em uma string
function converterListaDeNumerosParaString(listaDeNumeros: number[]): string{
    let conversao: string = "";

    listaDeNumeros.forEach((numero: number) =>{
        conversao += `${numero}-`;
    })

    conversao = conversao.slice(0, -1);

    return conversao;
}


function main(): void{
    const numeros: number[] = [2, 4, 8, 16, 32, 64, 128];
    let conversao: string = converterListaDeNumerosParaString(numeros);
    console.log(conversao);
}


main();
