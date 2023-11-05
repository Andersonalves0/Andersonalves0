import entrada from 'readline-sync';

console.log("Aplicação de Juros: \n");

let valorDivida = entrada.question("Informe o valor Devido: R$ ");
let valorJuros;

if(valorDivida > 0){

    let dias = entrada.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if(dias > 0){

        if(dias > 15){
            valorJuros = 10;    
        }
        else{
            valorJuros = 5;
        }

        let totalJuros = (valorDivida / 100) * valorJuros;  
        let valorTotal = Number(valorDivida) + Number(totalJuros);

        console.log("\nValor original da divida: R$ "+valorDivida);
        console.log("Dias atrasado: "+dias);
        console.log("Taxas de juros: "+totalJuros+ "%");
        console.log("Valor total com juros: R$ "+valorTotal);
    }
    else{
        console.log("Você está em dia!");
    }
}
else{
    console.log("O valor da divida deve ser maior que zero!");
}