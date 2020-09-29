var count = 0;
var respCorreta = 0;

function loadQuestion(resp) {
    var f = questions;
    var indice = Math.floor((Math.random() * 4));
    console.log("entrou");
    document.getElementById('imgQuiz').innerHTML = "<img src=" + f[indice].imagem + ">";
    document.getElementById('resp1').innerHTML = "RESPOSTA1" + f[indice].resp1;
    document.getElementById('resp3').innerHTML = "RESPOSTA2" + f[indice].resp2;
    document.getElementById('resp2').innerHTML = "RESPOSTA3" + f[indice].resp3;
    document.getElementById('resp4').innerHTML = "RESPOSTA4" + f[indice].resp4;

    if (resp != 0) {
        if (resp == respCorreta)
            count++;
        document.getElementById('contQuiz').innerHTML = count;
    }

    respCorreta = f[indice].respPrinc;

    delete f[indice];
}