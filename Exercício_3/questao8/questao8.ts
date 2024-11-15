// Arquivo referente à questão 8


/* Crie um exemplo usando a função map para dobrar os elementos de um array e
reduce para totalizar a soma dos elementos do array. */


function main(): void{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const arrayMapeado = array.map((numero: number) => numero * 2);
    const soma = arrayMapeado.reduce((soma: number, numero: number) => soma + numero, 0);

    console.log('Listagem dos números mapeados\n');
    arrayMapeado.forEach((numero: number) => console.log(numero));

    console.log(`\nSoma de todos os valores: ${soma}`);
}


main();
