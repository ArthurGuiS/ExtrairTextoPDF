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
    let textoCortado = textoPDF.split("\n")

    let dados = []
    dados.push(textoCortado[7], textoCortado[9], textoCortado[11], textoCortado[13], textoCortado[15], textoCortado[17], textoCortado[21], textoCortado[28], textoCortado[38], textoCortado[39])

    const boleto = {
        codigoDeRecolhimento: dados[0],
        NumeroDeReferencia: dados[1],
        competencia: dados[2],
        vencimento: dados[3],
        NomeUsuario: dados[4],
        cpfUsuario: dados[5],
        ugGestao: dados[6],
        valorPrincipal: dados[7],
        valorTotal: dados[8],
        codigoDeBarras: dados[9]
    }

    let jsonGRU = JSON.stringify(boleto)
    console.log(jsonGRU)

});