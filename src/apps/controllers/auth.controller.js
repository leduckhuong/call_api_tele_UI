
class Auth {
    index (req, res) {
        res.render('auth');
    }
}

module.exports = new Auth();