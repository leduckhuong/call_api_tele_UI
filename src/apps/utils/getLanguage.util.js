const LanguagesModel = require('../models/Languages.model');

async function getLanguage (langCode) {
    if(langCode !== 'en' && langCode !== 'vn') langCode = 'en';
    try {
        let languages = await LanguagesModel.find({code: langCode});
        languages.sort(function(a, b) {
            return a.index - b.index;
        });
        return languages;
    } catch (error) {
        return undefined;
    }
}

module.exports = getLanguage;