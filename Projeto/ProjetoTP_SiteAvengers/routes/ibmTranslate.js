var express = require('express');
var router = express.Router();

const languageTranslator = require('../lib/translate');

router.post('/translator', function(req, res, next) {

    var { textDocument, idioma } = req.body;
    console.log("testepost" + textDocument + "   " + idioma);

    //context = JSON.parse(textDocument);

    const translateParams = {
        text: textDocument,
        modelId: idioma,
    };

    console.log("POST-PRINT");

    languageTranslator.translator.translate(translateParams,
            function(err, response) {
                if (err) res.json({ status: 'ERRO', data: err.toString() });
                else res.json({ status: 'OK', data: response });
            }
        )
        .then(translationResult => {
            console.log("print dentro da rota" + JSON.stringify(translationResult, null, 2));
            res.json(translationResult, null, 2);
        })
        .catch(err => {
            console.log('error:', err);
        });
});


module.exports = router;