

class Index {
    index(req, res) {
        res.render('index');
    }
}

module.exports = new Index();