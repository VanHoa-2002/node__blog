class NewsController {
    index(req, res) {
        res.render('new');
    }
    show(req, res) {
        res.send('detail');
    }
}
module.exports = new NewsController();
