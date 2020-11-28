var contextDialog = '{}';
//var textMessage = '';

function sendMessageToAssistant() {
    var textMessage = document.chatForm.textMessage.value;
    chat = document.getElementById('chat');

    console.log("entrouantesdoIf");
    if (textMessage === undefined || textMessage === '') {

        textMessage = '';
        //document.chatForm.textMessage.value = '';
        console.log("entrounoIf");
    } else chat.innerHTML += 'Você -->' + textMessage + '<br>';

    document.chatForm.textMessage.value = '';



    $.post("/ibmWatson/assistant", { text: textMessage, contextDialog },
            function(returnedData, statusRequest) {
                console.log("entrou");
                if (returnedData.status === 'ERRO') alert(returnedData.data);
                else {
                    chat.innerHTML += 'Chatbot-->' + returnedData.data.result.output.text + '<br>';
                    contextDialog = JSON.stringify(returnedData.data.result.context);
                }
            }
        )
        .fail(function(returnedData) {
            alert('Erro: ' + returnedData.status + ' ' + returnedData.statusText);
        });
}


$(document).keypress(
    function(event) {
        if (event.which == '13') {
            event.preventDefault();
            sendMessageToAssistant();
        }
    }
);

$(document).ready(function() {

    sendMessageToAssistant();

});