// Arquivo referente à questão 01


class Calculadora 
{
    private _operando1: number;
    private _operando2: number;


    constructor(_operando1: number, _operando2: number) 
    {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }


    public somar(): number 
    {
        return this._operando1 + this._operando2;
    }


    public multiplicar(): number 
    {
        return this._operando1 * this._operando2;
    }
}


function main(): void 
{
    const calc = new Calculadora(10, 5);

    /*O atributo _operando1 só pode ser acessado diretamente na classe Calculadora, logo, o 
    código não roda.*/
    console.log(`${calc._operando1}`);
};


main();
