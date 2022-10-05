/*
npm init -y

npm i pdf-parse
*/

const fs = require('fs');
const pdf = require('pdf-parse');
const { stringify } = require('querystring');
 
//caminho para o pdf
let dataBuffer = fs.readFileSync('.path to PDF file...');
 
pdf(dataBuffer).then(function(data) {
    let textoPDF = data.text
    let dados = []

    let textoCortado = textoPDF.split("\n")
    //console.log(textoCortado)
    
    let palavra = textoCortado[14]
    let aux1 = palavra.substring(17)
    
    palavra = textoCortado[16]
    let aux2 = palavra.substring(0, 27)
    let aux = aux1 + aux2
    dados.push(aux)

    palavra = textoCortado[22]
    aux = palavra.substring(0, 11)
    dados.push(aux)

    palavra = textoCortado[25]
    aux = palavra.substring(0, 7)
    dados.push(aux)

    palavra = textoCortado[28]
    aux = palavra.substring(0, 10)
    dados.push(aux)

    palavra = textoCortado[31]
    aux = palavra.substring(0, 14)
    dados.push(aux)

    palavra = textoCortado[34]
    aux = palavra.substring(0, 4)
    dados.push(aux)

    palavra = textoCortado[43]
    aux = palavra.substring(0, 4)
    dados.push(aux)


    const comprovantePagamento = {
        NumeroDeReferencia: dados[1],
        competencia: dados[2],
        vencimento: dados[3],
        cpfUsuario: dados[4],
        valorPrincipal: dados[5],
        valorTotal: dados[6],
        codigoDeBarras: dados[0]
    };

    let jsonComprovante = JSON.stringify(comprovantePagamento)
    console.log(jsonComprovante)

});