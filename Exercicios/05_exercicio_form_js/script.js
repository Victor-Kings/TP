function LimparCampos() {
    var op = confirm('Limpando os Campos...');
    if (op == true) {
        document.cadastro.reset();
    }
}

function ValidarCampos() {
    var nome = document.cadastro.nome.value;
    var FlagInvalida = true;
    console.log(nome);
    if (nome.length <= 3) {
        alert("Nome deve ter mais que 3 caracteres");
        document.cadastro.nome.value = "";
        FlagInvalida = false;
    } else {
        document.cadastro.nome.value = nome.toUpperCase();
    }

    var estado = document.cadastro.estadoCivil.value;
    console.log(estado);

    if (estado == "") {
        FlagInvalida = false;
        document.getElementById("SpanEstado").innerHTML = "Estado cívil inválido";

    } else {
        document.getElementById("SpanEstado").innerHTML = " ";
    }
    console.log(document.cadastro.Objetivo.value);

    document.cadastro.Objetivo.value = document.cadastro.Objetivo.value.toLowerCase();

    if ((!document.cadastro.telefone.value.match(document.cadastro.telefone.pattern)) && (!document.cadastro.email.value.match(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i))) {
        console.log("entrou tele/email");
        alert("preencha email ou telefone");
        FlagInvalida = false;
    }

    var ingles = document.cadastro.idiomaIngles.value;
    var espanhol = document.cadastro.idiomaEspanhol.value;

    if (ingles == "" || espanhol == "") {
        FlagInvalida = false;
        alert("Selecione o nível de Ingles e Espanhol");
    }
    var LinC = document.getElementById("LinC").checked;
    var LinJava = document.getElementById("LinJava").checked;
    var LinVB = document.getElementById("LinVB").checked;
    var LinNet = document.getElementById("LinNet").checked;
    var LinPHP = document.getElementById("LinPHP").checked;
    var LinPython = document.getElementById("LinPython").checked;
    var LinHTML = document.getElementById("LinHTML").checked;

    if (LinC == false && LinJava == false && LinVB == false && LinNet == false && LinPHP == false && LinPython == false && LinHTML == false) {
        var op = confirm("DESEJA ENVIAR SEM NENHUMA LINGUAGEM?");

        if (op == false) {
            FlagInvalida = false;
        }
    }

    if (FlagInvalida == true) {
        alert("enviado");
    } else {
        alert("não enviado");
    }
}