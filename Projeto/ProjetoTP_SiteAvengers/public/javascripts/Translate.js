function translateAPI(idCards, SelectIdioma, verEnglish) {

    if (verEnglish == 0) {
        document.getElementById('languagens').className = 'imgEUA';
    }

    let cont = 0,
        idioma;

    if (localStorage.getItem("lastIdioma") == null) {


        idioma = 'pt-' + SelectIdioma;

        localStorage.setItem("lastIdioma", SelectIdioma);
        console.log("LOCALSTORE" + localStorage.getItem("lastIdioma"));
    } else {

        idioma = localStorage.getItem("lastIdioma") + '-' + SelectIdioma;

        localStorage.setItem("lastIdioma", SelectIdioma);
        console.log("LOCALSTORE" + localStorage.getItem("lastIdioma"));

    }


    // console.log("TEXTO TEST" + textDocument);

    //console.log("OQUE REALMENTE SERA TRADUZIDO" + idioma);
    let aux = idCards[cont];
    let textDocument = document.getElementById(aux).innerHTML;

    if (idioma !== "en-en") {

        for (cont = 0; cont < idCards.length; cont++) {

            let aux = idCards[cont];
            textDocument = document.getElementById(aux).innerHTML;
            $.post("/ibmTranslate/translator", { textDocument, idioma },
                function(returnedData, statusRequest) {
                    console.log("entrou");
                    if (returnedData.status === 'ERRO') alert(returnedData);
                    else {
                        console.log("--------RETORNO ----" + returnedData.data);
                        const TextData = JSON.stringify(returnedData.data.result.translations[0].translation);
                        const TData = TextData.slice(1, -1);
                        console.log("AOBA" + TData);
                        document.getElementById(aux).innerHTML = TData;
                    }
                }
            ).fail(function(returnedData) {
                alert('Erro: ' + returnedData.status + ' ' + returnedData.statusText);
            });
        }
    }
}

function translateOtherLanguagens(idCards, idioma) {

    switch (idioma) {
        case ("es"):
            document.getElementById('languagens').className = 'imgEspanha';
            break;

        case ("de"):
            document.getElementById('languagens').className = 'imgAlemanha';
            break;

        case ("fr"):
            document.getElementById('languagens').className = 'imgFranca';
            break;

        case ("pt"):
            document.getElementById('languagens').className = 'imgLanguages';
            break;
    }

    translateAPI(idCards, 'en', 1);
    setTimeout(() => { translateAPI(idCards, idioma, 1); }, 2000);

}