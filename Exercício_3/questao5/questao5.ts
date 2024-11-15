// Arquivo referente à questão 5


/* Crie uma função exibir receba como parâmetro um “rest parameter” representando
strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”); */


function exibir(...elementos: string[]): void {
    elementos.forEach((elemento: string) =>{
        console.log(`${elemento}`);
    })
}


function main(): void{
    console.log('Demonstração do uso de REST PARAMETER');
    
    console.log('\n1ª Chamada da função exibir():\n');
    exibir("a", "b");

    console.log('\n2ª Chamada da função exibir():\n');
    exibir("a", "b", "c");

    console.log('\n3ª Chamada da função exibir():\n');
    exibir("a", "b", "c", "d");
}


main();
