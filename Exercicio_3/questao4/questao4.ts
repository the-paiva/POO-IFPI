// Arquivo referente à resolução da questão 4


/* Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os
eventuais resultados:

function soma(x: number, y?: any): number {
    return x + y
}

a. console.log(soma(1, 2));
b. console.log(soma(1, "2"));
c. console.log(soma(1)); */


// Soma dois números
function soma(x: number, y?: any): number {
    return x + y;
}


function main(): void{
    console.log("Execução das alternativas propostas");
    console.log(`\nA. console.log(soma(1, 2)) -> ${soma(1, 2)}`);
    console.log(`B. console.log(soma(1, "2")) -> ${soma(1, "2")}`);
    console.log(`C. console.log(soma(1)) -> ${soma(1)}`);
}


main();
