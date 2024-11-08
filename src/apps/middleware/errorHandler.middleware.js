const getLanguageUtil = require('../utils/getLanguage.util');
const newAccessTokenUtil = require('../utils/newAccessToken.util');
const getDataUtil = require('../utils/getData.util');

module.exports = async function errorHandler (err, req, res, next) {
    console.log(req.url);

    const handler = async (status) => {
        try {
            if(status === 401) {
                console.log('Is errorHandle 401');
                return res.send('Is errorHandle 401');            
            }

            if(status === 403) {
                console.log('Is errorHandle 403');
                const cookieOptions = { signed: true, maxAge: 3600000 };
                const uid = req.signedCookies.uid;
                const act = req.signedCookies.act;
                let langCode = req.cookies.userLang;
                if(!uid || !act) return res.redirect('/login');
                if(err.message === 'Access token has expired') {
                    
                    
                    // Sử dụng try-catch để bắt lỗi trong các lời gọi async
                    try {
                        let languages = await getLanguageUtil(langCode);
                        const newAccessToken = await newAccessTokenUtil(uid);
                        const user = await getDataUtil(newAccessToken);
                        return res.cookie('act', newAccessToken, cookieOptions).render('index', { languages, user });
                    } catch (e) {
                        return res.status(500).send('Internal Server Error');
                    }
                }
                return res.send('Is errorHandle 403');            
            }

            if(status === 404) {
                console.log('Is errorHandle 404');
                return res.send('Is errorHandle 404');    
            }

            if(status === 409) {
                console.log('Is errorHandle 409');
                return res.send('Is errorHandle 409');    
            }

            if(status === 500) {
                console.log('Is errorHandle 500');
                return res.send('Is errorHandle 500');            
            }
            return res.send('Error');
        } catch (error) {
            return res.status(500).send('Internal Server Error');
        }
    }
    console.log(err);
    handler(err.status);
}
