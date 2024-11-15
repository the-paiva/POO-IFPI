// Arquivo referente à resolução da questão 7


/* Dado método filter dos arrays, crie uma implementação usando arrow function que
filtre todos os elementos pares do array abaixo:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; */


function main(): void{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const arrayFiltrado = array.filter((numero: number) => numero % 2 === 0);

    arrayFiltrado.forEach((numero: number) => console.log(numero));
}


main();
