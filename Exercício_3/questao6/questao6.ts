// Arquivo referente à questão 6


/* Converta em arrow function a seguinte função:

function ola(): void {
    console.log("Olá");
} */


function main(): void{
    const ola = ((): void => console.log("Ola!"));
    ola();
}
    
    
main();
