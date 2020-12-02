function translateAPI() {

    const textDocument = document.getElementById("Vingadores").innerHTML;
    const idioma = "pt-en";
    console.log(textDocument);

    $.post("/ibmTranslate/translator", { textDocument, idioma },
        function(returnedData, statusRequest) {
            console.log("entrou");
            if (returnedData.status === 'ERRO') alert(returnedData);
            else {
                //chat.innerHTML += 'Chatbot-->' + returnedData.data.result.output.text + '<br>';
                console.log("--------RETORNO ----" + returnedData.data);
                const TextData = JSON.stringify(returnedData.data.result.translations[0].translation);
                console.log("AOBA" + TextData);
                document.getElementById('Vingadores').innerHTML = TextData;
            }
        }
    ).fail(function(returnedData) {
        alert('Erro: ' + returnedData.status + ' ' + returnedData.statusText);
    });
}