const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');



const translator = new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
        apikey: 'ePBfaBupiToEn93vyM9c6B5IcePSpkmihPtkasn0q2f-',
    }),
    serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/022075ef-43f0-4feb-8064-790294bc76b9',
});

module.exports = { translator };